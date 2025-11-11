// USB-C Breakout Board
// 20mm x 14mm with female connector on one side and 8 pins on the other
//
// Dimensions:
//   - Board: 20mm x 14mm
//   - Pins: 8 pins with 2.54mm spacing
//
// Nets:
//   GND: Ground
//   VBUS: Power (5V)
//   CC1: Configuration Channel 1
//   CC2: Configuration Channel 2
//   DP: Data Plus
//   DN: Data Minus
//   SBU1: Sideband Use 1
//   SBU2: Sideband Use 2

module.exports = {
  params: {
    designator: 'USB',
    side: 'F',
    GND: { type: 'net', value: 'GND' },
    VBUS: { type: 'net', value: 'VBUS' },
    CC1: { type: 'net', value: 'CC1' },
    CC2: { type: 'net', value: 'CC2' },
    DP: { type: 'net', value: 'DP' },
    DN: { type: 'net', value: 'DN' },
    SBU1: { type: 'net', value: 'SBU1' },
    SBU2: { type: 'net', value: 'SBU2' }
  },
  body: p => {
    const board_width = 20
    const board_height = 14
    const pin_spacing = 2.54
    const pin_diameter = 1.0
    const pin_pad_size = 1.7

    // Pins along the opposite side (bottom)
    // 8 pins centered, with 2.54mm spacing
    const total_pin_width = 7 * pin_spacing
    const pin_start_x = -total_pin_width / 2
    const pin_y = -board_height / 2 + 2.7

    return `
      (module USB-C_Breakout (layer ${p.side}.Cu) (tedit 5DD50112)
        ${p.at}

        ${'' /* Reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        (fp_text value "USB-C" (at 0 0) (layer ${p.side}.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )

        ${'' /* Board outline */}
        (fp_line (start ${-board_width/2} ${-board_height/2}) (end ${board_width/2} ${-board_height/2}) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start ${board_width/2} ${-board_height/2}) (end ${board_width/2} ${board_height/2}) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start ${board_width/2} ${board_height/2}) (end ${-board_width/2} ${board_height/2}) (layer ${p.side}.SilkS) (width 0.12))
        (fp_line (start ${-board_width/2} ${board_height/2}) (end ${-board_width/2} ${-board_height/2}) (layer ${p.side}.SilkS) (width 0.12))

        ${'' /* Pin headers - 8 pins with 2.54mm spacing, left to right: CC2, SBU1, D+, D-, CC1, SBU2, VBUS, GND */}
        (pad 1 thru_hole circle (at ${pin_start_x + 0 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.CC2.str})
        (pad 2 thru_hole circle (at ${pin_start_x + 1 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.SBU1.str})
        (pad 3 thru_hole circle (at ${pin_start_x + 2 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.DP.str})
        (pad 4 thru_hole circle (at ${pin_start_x + 3 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.DN.str})
        (pad 5 thru_hole circle (at ${pin_start_x + 4 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.CC1.str})
        (pad 6 thru_hole circle (at ${pin_start_x + 5 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.SBU2.str})
        (pad 7 thru_hole circle (at ${pin_start_x + 6 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.VBUS.str})
        (pad 8 thru_hole circle (at ${pin_start_x + 7 * pin_spacing} ${pin_y} ${p.r}) (size ${pin_pad_size} ${pin_pad_size}) (drill ${pin_diameter}) (layers *.Cu *.Mask) ${p.GND.str})
      )
    `
  }
}
