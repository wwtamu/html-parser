import { AbstractState } from "./abstract-state";

// 12.2.5.79 Decimal character reference state
// Consume the next input character:
// ↪ ASCII digit
// Multiply the character reference code by 10. Add a numeric version of the current input character(subtract 0x0030
// from the character's code point) to the character reference code.
// ↪ U + 003B SEMICOLON
// Switch to the numeric character reference end state.
// ↪ Anything else
// This is a missing-semicolon-after-character-reference parse error. Reconsume in the numeric character reference
// end state.
export class DecimalCharacterReferenceState extends AbstractState {
  consume(character: string): void {
    switch (character) {
      default:
        break;
    }
  }
}
