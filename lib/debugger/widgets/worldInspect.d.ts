import type Plasma from "@rbxts/plasma"
import type Debugger from "../debugger"

declare namespace worldInspect {
	type ObjectStack = Array<{ key: string; icon: string; value: unknown }>
}

declare function worldInspect(plasma: Plasma): (myDebugger: Debugger, objectStack: worldInspect.ObjectStack) => void

export = worldInspect
