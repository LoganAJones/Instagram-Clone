import Stories from "./Stories"

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:grid-cols-3 xl:max-w-6xl max-autp\o'>
        {/* Section */}
        <section>
            {/* stories */}
            <Stories />
            {/* posts */}
        </section>

        {/* Section */}
        <section>
            {/* MiniProfile */}
            {/* Suggestions */}
        </section>
    </main>
  )
}

export default Feed