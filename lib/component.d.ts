import type { None } from "./immutable"

export type AnyComponent = Component<object>

export type ComponentBundle = Array<AnyComponent>

type Id<T> = T

type PatchOverride<Base, Overrides> = Id<{
	[K in keyof Base | keyof Overrides]: K extends keyof Overrides
		? Overrides[K]
		: K extends keyof Base
			? Base[K]
			: never
}>

type OptionalKeys<T> = { [K in keyof T]: T[K] | None }

export type Component<T extends object> = { readonly [K in keyof T]: T[K] } & {
	patch<U extends OptionalKeys<Partial<T>>>(data: U): Component<ExcludeMembers<PatchOverride<T, U>, None>>
}

export type GenericOfComponent<T> = T extends Component<infer A> ? A : never

export type DynamicBundle = Array<ComponentCtor<any>>

export type InferComponents<A extends DynamicBundle> = { [K in keyof A]: ReturnType<A[K]> }

type ComponentCtor<T extends object = object> = (data: T) => Component<T>

export function newComponent<T extends object = object>(name?: string, defaultData?: T): ComponentCtor<T>
