import { Button } from './Button'
import { Input } from './input'

type Props = {
  onPageChange: (skip: number) => void
  onSearchChange: (searchQuery: string) => void
  skip: number
  pageSize: number
  searchQuery: string
}

export const OptionControls = ({
  onPageChange,
  onSearchChange,
  pageSize,
  searchQuery,
  skip
}: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <Button size="sm" disabled={skip === 0} onClick={() => onPageChange(skip - pageSize)}>
        Prev
      </Button>
      <Input value={searchQuery} onChange={(e) => onSearchChange(e.target.value)}></Input>
      <Button size="sm" onClick={() => onPageChange(skip + pageSize)}>
        Next
      </Button>
    </div>
  )
}
