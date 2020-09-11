import React from 'react'
import './SearchPage.css'
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from "react-router-dom";
import logo2 from "./logos/searchlogo1.png";
import Search from './Search';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    // const data = Response;

    console.log(data)
    return (
        <div className="searchPage">
            <div className='searchPage__header'>
                <Link to="/">
                    <img className='searchPage__logo' src={logo2} alt="search page logo" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime}) seconds for {term}
                    </p>
                    {data?.items.map((item) => (
                        <div className="searchPage__result">

                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>

                            <a href={item.link} className="searchPage__resultLink">
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchPage__resultImage"
                                            src={item.pagemap?.cse_image[0]?.src}
                                            alt="result__Image"
                                        />
                                    )}
                                <span>{item.displayLink}</span>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchPage;

