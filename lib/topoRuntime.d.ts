import type { System } from "./Loop"
import type { World } from "./World"

type MatterFrameState = {
	generation: boolean
	deltaTime: number
	dirtyWorlds: Array<World>
}

type Node<T extends Array<unknown>> = {
	frame?: MatterFrameState
	currentSystem?: System<T>
	system?: System<T>
}

declare function start<T extends Array<unknown>>(node: Node<T>, fn: () => void): void

declare function useHookState<T>(discriminator?: unknown, cleanupCallback?: (storage: T) => boolean | undefined): T

declare function useFrameState(): MatterFrameState

declare function useCurrentSystem<T extends Array<unknown>>(): System<T>

declare function withinTopoContext(): boolean

export { start, useHookState, useFrameState, useCurrentSystem, withinTopoContext }
