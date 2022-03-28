import { CardList } from 'components/card-list'
import { CardListItemData } from 'components/card-list/item'
import { Skeleton } from 'components/card-list/skeleton'
import { CustomDropDown } from 'components/custom-dropdown'
import { FormWrapper } from 'components/form-wrapper'
import { SearchBox } from 'components/search-box'
import { useSearch } from 'hooks/use-search'
import { useState } from 'react'
import { EmptyAppList } from './empty-app-list'
import { Pagination } from './pagination'
import { usePagination } from './use-pagination'
import happyFolderSvg from 'assets/img/no-application-svg.svg'

type Props = {
  title: string
  data?: CardListItemData[]
  isLoading: boolean
  emptyData?: {
    title: string
    description: string
    svg?: SVGElement
  }
  actionBar?: React.ReactNode
  isClosable?: boolean
}

export const List = ({
  title,
  data = [],
  isLoading,
  emptyData = {
    title: 'No data',
    description: "There's nothing to show yet",
  },
  actionBar,
  isClosable = false,
}: Props) => {
  if (isClosable) {
    return (
      <CustomDropDown title={title} className="bg-white">
        <LoadableList
          data={data}
          emptyData={emptyData}
          actionBar={actionBar}
          isLoading={isLoading}
        />
      </CustomDropDown>
    )
  }
  return (
    <FormWrapper title={title} className="bg-white">
      <LoadableList
        data={data}
        emptyData={emptyData}
        actionBar={actionBar}
        isLoading={isLoading}
      />
    </FormWrapper>
  )
}

type LoadableListProps = {
  data: CardListItemData[]
  actionBar: React.ReactNode
  isLoading: boolean
  emptyData: {
    title: string
    description: string
    svg?: SVGElement
  }
}

const LoadableList = ({
  actionBar,
  data,
  emptyData,
  isLoading,
}: LoadableListProps) => {
  if (isLoading) return <Skeleton />

  if (data.length === 0)
    return (
      <EmptyAppList
        svg={emptyData.svg || happyFolderSvg}
        title={emptyData.title}
        description={emptyData.description}
        actionBar={actionBar}
      />
    )

  return <WrappedList data={data} actionBar={actionBar} />
}

type WrappedListProps = {
  data: CardListItemData[]
  actionBar: React.ReactNode
}

const WrappedList = ({ data, actionBar }: WrappedListProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { newList: searchedData } = useSearch(data, ['name'], searchQuery)
  const { pageData, indexes, dots, isAtStart, isAtEnd, currentPage, setPage } =
    usePagination(searchedData, 15, 1)

  return (
    <div className="py-4 space-y-8">
      <div className="flex items-center">
        <SearchBox
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex-grow">{actionBar}</div>
      </div>

      {searchedData.length === 0 ? (
        <div className="text-xs font-bold text-center">
          No search result found
        </div>
      ) : (
        <CardList data={pageData} />
      )}

      <Pagination
        indexes={indexes}
        dots={dots}
        isAtStart={isAtStart}
        isAtEnd={isAtEnd}
        currentPage={currentPage}
        setPage={setPage}
      />
    </div>
  )
}
