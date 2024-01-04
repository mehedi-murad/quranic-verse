import { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Home.css'
import SearchType from "../SearchType/SearchType";
import Modals from "../Modals/Modals";
import Footer from "../Footer/Footer";



const Home = () => {
  const [verses, setVerses] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const [currentPage, setCurrentPage] = useState(0)
    const [testPerPage, setTestPerPage] = useState(300)
    const {count} = useLoaderData()
    const numberOfPage = Math.ceil(count / testPerPage)
    

    const pages = [...Array(numberOfPage).keys()]
    
    useEffect(() => {
      console.log('Search Query:', searchQuery);
      setLoading(true)
      fetch(`https://al-quran-server.vercel.app/verse?page=${currentPage}&size=${testPerPage}&search=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched Data:', data);
          setVerses(data);
          setLoading(false)
        })
        .catch((error) => {
          console.error('Fetch Error:', error);
        });
    }, [currentPage, testPerPage, searchQuery]);
      
    // const handleTestPerPage = e =>{
    //   const value = parseInt(e.target.value)
    //   console.log(value)
    //   setTestPerPage(value)
    //   setCurrentPage(0)
    // }
  
    // const handlePrevPage = () => {
    //   if(currentPage > 0){
    //     setCurrentPage(currentPage - 1)
    //   }
    // }
  
    // const handleNextPage = () => {
    //   if(currentPage < pages.length - 1){
    //     setCurrentPage(currentPage + 1)
    //   }
    // }

      const handleSearch = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        console.log('Search Query:', newSearchQuery);
      };
    return (
        <div>
          <div className="bg-slate-600 min-h-screen p-10">
          <Navbar></Navbar>
          <p className="text-center text-4xl font-bold mb-10 mt-10">Search the required Verse from the Holy Quran</p>
          
          <div className="flex justify-center">
                <div>
                    <div className="search-container mt-5 flex justify-center items-center">
                          <div>
                            <input type="text" 
                              placeholder="E.g. Al-Faatiha 2" 
                              className="input input-bordered input-accent md:w-[600px] mr-2"
                              id="search"
                              name="search"
                              value={searchQuery}
                              onChange={handleSearch} />
                          </div>
                            <div>
                            <Fragment>
                            
                            <button onClick={() => setShowModal(true)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md py-3 px-3 w-full rounded-lg text-center">List of Surah's</button>
                            <Modals isVisible = {showModal} onClose={() => setShowModal(false)}>
                                <div className="p-5 overflow-y-scroll h-[650px]">
                                    <SearchType></SearchType>
                                </div>
                            </Modals>
                        
                          </Fragment>
                            </div>
                    </div>
                    <div className="max-w-7xl mx-auto mt-20 p-4 mb-5">
                      {searchQuery ? (
                        <div>
                          {loading ? (
                            <div className="flex justify-center items-center">
                              <span className="loading loading-infinity loading-lg"></span>
                            </div>
                          ) : verses.length > 0 ? (
                            <div className="grid grid-cols-1 gap-4">
                              {verses.map((verse) => (
                                <div className="collapse bg-base-200 md:w-[600px]" key={verse.id}>
                                  <input type="checkbox" />
                                  <div className="collapse-title text-xl font-medium">
                                    <h2 className="card-title text-black">{verse.aya} (Click to Expand)</h2>
                                  </div>
                                  <div className="collapse-content space-y-6">
                                    <p className="text-right text-4xl font-lateef font-semibold">
                                      {verse.arabic_text}
                                    </p>
                                    <div className="divider"></div>
                                    <p>{verse.translation}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-2xl font-semibold">
                              No results found for '{searchQuery}'.
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="text-center space-y-4">
                          <p className="text-4xl font-bold">Nothing you have searched yet!</p>
                          <p className="text-xl font-semibold">Please try producing a search result...</p>
                        </div>
                      )}
                    </div>


                    
                </div>
          </div>

          {/* <div className="pagination flex justify-center items-center mt-20">
                <button onClick={handlePrevPage}>Prev</button>
                {
                  pages.map(page => <button 
                    onClick={()=> setCurrentPage(page)} 
                    key={page} 
                    className={currentPage === page ? 'selected' : undefined}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select className="text-black" onChange={handleTestPerPage} value={testPerPage} name="" id="">
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="400">500</option>
                </select>
          </div> */}
        </div>
        <div className="-mt-16">
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;