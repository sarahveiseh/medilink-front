import { CardListItemData, Item } from './item'

type Props = {
  data: CardListItemData[]
}

export const CardList = ({ data = [] }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  )
}
