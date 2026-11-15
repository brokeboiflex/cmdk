import { Command } from 'cmdk'
import { useRouter } from 'next/router'
import * as React from 'react'

const Page = () => {
  const [open, setOpen] = React.useState(false)
  const label = useRouter().query.label as string | undefined

  React.useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <div>
      <Command.Dialog open={open} onOpenChange={setOpen} label={label}>
        <Command.Input placeholder="Search…" />
        <Command.List>
          <Command.Empty>No results.</Command.Empty>
          <Command.Item onSelect={() => console.log('Item selected')}>Item</Command.Item>
          <Command.Item value="xxx">Value</Command.Item>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}

export default Page
