import type Plasma from "@rbxts/plasma"
import type Debugger from "../debugger"
import type { CustomWidgets } from "../debugger"

declare function errorInspect(plasma: Plasma): (myDebugger: Debugger<Array<unknown>>, custom: CustomWidgets) => void

export = errorInspect
