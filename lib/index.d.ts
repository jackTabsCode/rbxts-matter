import type { Widgets } from "@rbxts/plasma"
import { type AnySystem, Loop, type System, type SystemFn, type SystemStruct } from "./Loop"
import { type AnyEntity, type Entity, World } from "./World"
import {
	type AnyComponent,
	type Component,
	type GenericOfComponent,
	type InferComponents,
	newComponent,
} from "./component"
import Debugger from "./debugger/debugger"
import log from "./hooks/log"
import useDeltaTime from "./hooks/useDeltaTime"
import useEvent from "./hooks/useEvent"
import useThrottle from "./hooks/useThrottle"
import { None, merge } from "./immutable"
import { useCurrentSystem, useHookState } from "./topoRuntime"

export {
	World,
	Loop,
	newComponent as component,
	useEvent,
	useDeltaTime,
	useThrottle,
	log,
	useHookState,
	useCurrentSystem,
	merge,
	None,
	Debugger,
}

export type {
	Entity,
	AnyEntity,
	Component,
	AnyComponent,
	InferComponents,
	GenericOfComponent,
	System,
	SystemFn,
	SystemStruct,
	AnySystem,
	Widgets as DebugWidgets,
}
