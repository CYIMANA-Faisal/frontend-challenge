const PharmacistsView = ({data}) => {
    return ( 
        <>
            <div className='w-full pb-2'>
                <h1 className='prose w-full font-bold text-2xl'>Most bought drugs 2000 - 2002</h1>
            </div>
            <table className="text-sm text-left text-gray-500 dark:text-gray-400 mt-4 mb-4 w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              2000
            </th>
            <th scope="col" className="py-3 px-6">
              2001
            </th>
            <th scope="col" className="py-3 px-6">
              2002
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item && item["2000"]}
              </th>
              <td className="py-4 px-6">{item && item["2001"]}</td>
              <td className="py-4 px-6">{item && item["2002"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    );
}
 
export default PharmacistsView;