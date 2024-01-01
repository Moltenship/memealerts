import { MemeAlertsOptions } from '@renderer/api/memeAlertsApi'
import { Button } from './Button'
import { Input } from './Input'
import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

type Props = {
  onPageChange: (skip: number) => void
  onSearchChange?: (searchQuery: string) => void
  skip: number
  pageSize: number
  searchQuery?: string
}

export const useOptionsControls = (streamerId: string) => {
  const [options, setOptions] = useState<MemeAlertsOptions>({
    pageSize: 20,
    skip: 0,
    streamerId
  })
  const [searchQuery, setSearchQuery] = useState('')

  const onSearchChange = useCallback((search: string) => {
    setSearchQuery(search)
    setOptions((o) => ({ ...o, skip: 0 }))
  }, [])

  const onPageChange = useCallback((skip: number) => {
    setOptions((o) => ({ ...o, skip }))
  }, [])

  const debouncedSearchQuery = useDebounce(searchQuery, 1000)

  const debouncedOptions = useMemo(() => {
    return {
      ...options,
      searchQuery: debouncedSearchQuery
    }
  }, [debouncedSearchQuery, options])

  return {
    options: debouncedOptions,
    onPageChange,
    onSearchChange,
    searchQuery
  }
}

export const OptionsControls = ({
  onPageChange,
  onSearchChange,
  pageSize,
  searchQuery = '',
  skip
}: Props) => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <Button size="sm" disabled={skip === 0} onClick={() => onPageChange(skip - pageSize)}>
        Prev
      </Button>
      {onSearchChange != null && (
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        ></Input>
      )}
      <Button size="sm" onClick={() => onPageChange(skip + pageSize)}>
        Next
      </Button>
    </div>
  )
}
