import { Command } from 'cmdk'

const Page = () => {
  return (
    <Command>
      <Command.Input />
      <Command.List>
        {/* The heading equals the value of an item that registers after the group */}
        <Command.Group heading="Apple">
          <Command.Item>Banana</Command.Item>
        </Command.Group>
        <Command.Item>Apple</Command.Item>

        {/* Two items share a value; only one of them matches `beta` */}
        <Command.Item value="Twin" keywords={['alpha']}>
          Twin alpha
        </Command.Item>
        <Command.Item value="Twin" keywords={['beta']}>
          Twin beta
        </Command.Item>
      </Command.List>
    </Command>
  )
}

export default Page
