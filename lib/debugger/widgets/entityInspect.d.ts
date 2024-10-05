import type Plasma from "@rbxts/plasma"
import type Debugger from "../debugger"

declare function entityInspect(plasma: Plasma): (myDebugger: Debugger) => void

export = entityInspect
