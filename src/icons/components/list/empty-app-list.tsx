type Props = {
  title: string
  description: string
  actionBar: React.ReactNode
  svg: any
}

export function EmptyAppList({ title, description, actionBar, svg }: Props) {
  return (
    <div className="space-y-3 text-center ">
      <img
        className="w-1/3 min-w-[200px] pl-10 mx-auto xs-invisible md-visible mt-0"
        src={svg}
        alt=""
      />
      <div className="font-semibold">{title}</div>
      <div className="text-sm font-normal text-gray-400">{description}</div>
      <div className="flex justify-center pt-1 text-left">{actionBar}</div>
    </div>
  )
}
