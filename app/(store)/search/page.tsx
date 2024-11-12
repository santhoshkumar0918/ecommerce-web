import React from 'react'

async function page({ searchParams ,}: {
    searchParams: {
        query: string
    };
}) {

    const { query } = await searchParams;
  return (
    <div>
      Searching for {query}...  
    </div>
  )
}

export default page
