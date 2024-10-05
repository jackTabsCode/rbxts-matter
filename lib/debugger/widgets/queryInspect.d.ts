import type Plasma from "@rbxts/plasma"
import type Debugger from "../debugger"

declare function queryInspect(plasma: Plasma): (myDebugger: Debugger) => void
