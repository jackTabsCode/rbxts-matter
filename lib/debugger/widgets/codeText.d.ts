import type Plasma from "@rbxts/plasma"

declare namespace codeText {
	type CodeTextOptions = object
}

declare function codeText(plasma: Plasma): (text: string, options: codeText.CodeTextOptions) => void

export = codeText
