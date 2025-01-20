export default function Table({ theadValues, tbodyValues }) {
  return (
    <table id='result'>
      <thead>
        <tr>
          {
            theadValues.map((headerValue, index) => (
              <th key={index}>{headerValue}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          tbodyValues.map((body, index) => (
            <tr key={index}>
              {
                Object.entries(body)
                  .map(([key, value]) => (
                    <td key={key}>{value}</td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}