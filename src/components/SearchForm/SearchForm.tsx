import React from 'react'
import { generationList, typesList, sortList } from '@/utils/optionList'
import { useSearchForm } from './SearchForm.hook'


function SearchForm() {
    const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
        useSearchForm()
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[20px]">

            <div>
                <label
                    htmlFor="gerneration"
                    className="block mb-2 text-mb font-medium text-white">
                    Select an option
                </label>
                <select
                    {...fieldGeneration}

                    id="gerneration"
                    className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">

                    {generationList.map((item, index) => {
                        return <option className="capitalize" key={`gerneration-key-${index}`} value={index}>{item.name}</option>
                    })}
                </select>
            </div>

            <div>
                <label
                    htmlFor="type"
                    className="block mb-2 text-mb font-medium text-white"
                >

                    Type
                </label>
                <select
                    {...fieldType}
                    id="type"
                    className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">
                    {typesList.map((item) => {
                        return <option className="capitalize" key={`type-key-${item}`} value={item}>{item}</option>
                    })}
                </select>
            </div>
            <div>
                <label
                    htmlFor="sort"
                    className="block mb-2 text-mb font-medium text-white">
                    Sort By
                </label>
                <select
                    {...fieldSort}
                    id="sort"
                    className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">
                    {sortList.map((item, index) => {
                        return <option className="capitalize" key={`sort-key-${index}`} value={index}>{item}</option>
                    })}
                </select>
            </div>

            <div>
                <label
                    htmlFor="gernerationxx"
                    className="block mb-2 text-mb font-medium text-white">
                    Select an option
                </label>
                <input
                    {...fieldKeyword}
                    id="gernerationxx"
                    className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">

                </input>
            </div>

        </form>
    )
}

export default SearchForm


// import React from 'react'
// import { generationList, typesList, sortList } from '@/utils/optionList'
// import { useSearchForm } from './SearchForm.hook'


// function SearchForm() {
//     const { fieldKeyword, fieldGeneration, fieldSort, fieldType } =
//         useSearchForm()
//     return (
//         <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[20px]">

//             <div>
//                 <label
//                     htmlFor="gerneration"
//                     className="block mb-2 text-mb font-medium text-white">
//                     Select an option
//                 </label>
//                 <select
//                     {...fieldGeneration}

//                     id="gerneration"
//                     className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">

//                     {generationList.map((item, index) => {
//                         return <option className="capitalize" key={`gerneration-key-${index}`} value={index}>{item.name}</option>
//                     })}
//                 </select>
//             </div>

//             <div>
//                 <label
//                     htmlFor="type"
//                     className="block mb-2 text-mb font-medium text-white"
//                 >

//                     Type
//                 </label>
//                 <select
//                     {...fieldType}
//                     id="type"
//                     className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">
//                     {typesList.map((item) => {
//                         return <option className="capitalize" key={`type-key-${item}`} value={item}>{item}</option>
//                     })}
//                 </select>
//             </div>
//             <div>
//                 <label
//                     htmlFor="sort"
//                     className="block mb-2 text-mb font-medium text-white">
//                     Sort By
//                 </label>
//                 <select
//                     {...fieldSort}
//                     id="sort"
//                     className="bg-[#253641] border capitalize border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">
//                     {sortList.map((item, index) => {
//                         return <option className="capitalize" key={`sort-key-${index}`} value={index}>{item}</option>
//                     })}
//                 </select>
//             </div>

//             <div>
//                 <label
//                     htmlFor="gernerationxx"
//                     className="block mb-2 text-mb font-medium text-white">
//                     Select an option
//                 </label>
//                 <input
//                     {...fieldKeyword}
//                     id="gernerationxx"
//                     className="bg-[#253641] border border-gray-300 text-white text-sm rounded-lg focus:ring-[#3168AB] focus:border-[#3168AB] block w-full p-2.5">

//                 </input>
//             </div>

//         </form>
//     )
// }

// export default SearchForm

