import type Plasma from "@rbxts/plasma"
import type { CustomWidgets } from "../debugger"

declare namespace valueInspect {
	type ObjectStack = Array<{ icon: string; key: string; value: unknown }>
}

declare function valueInspect(plasma: Plasma): (objectStack: valueInspect.ObjectStack, custom: CustomWidgets) => void

export = valueInspect
