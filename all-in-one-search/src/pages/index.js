import {useEffect, useState} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {stripHtml, unicodeToChar, coolParse} from '../plugins/index';
import {searchTool} from '../store/index';
import {SearchButton} from '../components/SearchButton';

export default function Home({autoComplete}) {
  const [canSearch, setCanSearch] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    window.open(`${searchTool[0].uri}${searchContent}`);
  };

  useEffect(() => {
    // https://developers.google.com/search/docs/advanced/crawling/301-redirects
    if (searchContent) {
      router.push('/?q=' + searchContent);
    } else {
      router.push('/?q=');
    }
  }, [searchContent]);

  const ToggleButton = ({canSearch}) => {
    if (canSearch) {
      return (
        <div className="border-t-2 border-b-2 mt-3 flex flex-row justify-items-start flex-wrap m-2">
          {searchTool.map((e) => (
            <SearchButton
              key={e.title}
              icon={e.icon}
              title={e.title}
              uri={e.uri}
              search={searchContent}
              setSearchContent={setSearchContent}
            />
          ))}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#E6E6EE] p-5">
      <div className="w-full flex bg-[#F7F8FB] shadow-lg rounded-lg lg:w-3/4 p-5 flex-col">
        <div className="flex flex-row items-center space-x-2 bg-white shadow-lg w-full mt-3">
          <form className="flex flex-1" onSubmit={onSubmit}>
            <input
              className="bg-transparent text-sm md:text-base focus:outline-none h-24 w-full px-5 flex-1"
              type="text"
              placeholder="Search..."
              value={searchContent}
              onChange={(e) => {
                setCanSearch(false);
                setSearchContent(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="space-y-1 m-3 mb-5">
          {autoComplete &&
            autoComplete.map(([item], index) => {
              return (
                <div
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    if (autoComplete.length < 3) {
                      setCanSearch(true);
                    } else {
                      setCanSearch(false);
                    }
                    setSearchContent(stripHtml(item));
                  }}
                  key={index}
                  dangerouslySetInnerHTML={{__html: item}}
                />
              );
            })}
        </div>
        <ToggleButton canSearch={canSearch}></ToggleButton>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const {query} = context;

  const data = await axios
    .get(
      encodeURI(
        `https://www.google.com/complete/search?q=${query.q}&client=gws-wiz&xssi=t`
      ),
      {responseType: 'arraybuffer', reponseEncoding: 'binary'}
    )
    .then((res) => {
      return unicodeToChar(res.data.toString('latin1'));
    });

  const content = JSON.parse(data.slice(5, data.length));

  // console.log(coolParse(content));

  return {
    props: {
      autoComplete: content[0],
    },
  };
}
