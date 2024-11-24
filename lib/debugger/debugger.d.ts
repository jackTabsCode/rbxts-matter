import type { Loop, System } from "../Loop"

import type Plasma from "@rbxts/plasma"
import type { Widgets } from "@rbxts/plasma"
import type { AnyEntity } from "../World"
import type container from "./widgets/container"
import type entityInspect from "./widgets/entityInspect"
import type frame from "./widgets/frame"
import type hoverInspect from "./widgets/hoverInspect"
import type link from "./widgets/link"
import type panel from "./widgets/panel"
import type realmSwitch from "./widgets/realmSwitch"
import type selectionList from "./widgets/selectionList"
import type tooltip from "./widgets/tooltip"
import type valueInspect from "./widgets/valueInspect"
import type worldInspect from "./widgets/worldInspect"

declare namespace Debugger {
	interface CustomWidgets {
		panel: typeof panel
		selectionList: typeof selectionList
		container: typeof container
		frame: typeof frame
		link: typeof link
		realmSwitch: typeof realmSwitch
		valueInspect: typeof valueInspect
		worldInspect: typeof worldInspect
		entityInspect: typeof entityInspect
		tooltip: typeof tooltip
		hoverInspect: typeof hoverInspect
	}
}

declare class Debugger<T extends Array<unknown>> {
	public enabled: boolean
	public authorize?: (player: Player) => boolean
	public componentRefreshFrequency?: number
	public findInstanceFromEntity?: (id: AnyEntity) => Instance | undefined

	public constructor(plasma: Plasma)

	public show(): void

	public hide(): void

	public toggle(): void

	public connectPlayer(): void

	public disconnectPlayer(): void

	public autoInitialize(loop: Loop<T>): void

	public replaceSystem(oldSystem: System<T>, newSystem: System<T>): void

	public switchToServerView(): void

	public switchToClientView(): void

	public draw<T extends Array<unknown>>(loop: Loop<T>): void

	public getWidgets(): Widgets

	public loopParameterNames: Array<string>

	public raycastParams: RaycastParams
}

export = Debugger
