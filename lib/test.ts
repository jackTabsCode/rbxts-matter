import { newComponent } from "component"
import { type AnyEntity, World } from "World"

const Test = newComponent<{ foo: string }>("Test")
const Test2 = newComponent<{ bar: string }>("Test2")

Test({ foo: "" })
Test2({ bar: "" })

const world = new World()

for (const [entity, test, test2] of world.query(Test, Test2)) {
}

const test = world.get(0 as AnyEntity, Test)
const [test1, test2] = world.get(0 as AnyEntity, Test, Test2)

for (const [entity, record] of world.queryChanged(Test)) {
}
