import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const _Tabs = () => {
  let [categories] = useState({
    'What is this app about?': [
      {
        id: 1,
        title: 'This app is created to demonstrate a simple difference between the power of classical and quantum computing.',
        content: 'Suppose you have access to a huge, unsorted, static database that contains the names of every pokemon imaginable. \
        You are trying to find out if your favorite pokemon is in this database.',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Mert and Edgars comes to your rescue!",
        content: 'Mert writes a classical algorithm for you that iterates through each pokemon \
        in the database and compares if it matches your favorite pokemon. \
        Edgars, always following the latest trends, uses a quantum algorithm, namely Grover\'s algorithm.',

        commentCount: 3,
        shareCount: 2,
      },
    ]
  })

  return (
    <div className="px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-black rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-purple-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.content}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-violet-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default _Tabs