import type Plasma from "@rbxts/plasma"
import type { AnyEntity, World } from "../../World"
import type Debugger from "../debugger"

declare function hoverInspect(plasma: Plasma): (world: World, id: AnyEntity, custom: Debugger.CustomWidgets) => void

export = hoverInspect
