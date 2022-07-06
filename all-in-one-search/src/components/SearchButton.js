function SearchButton({title, uri, search, icon, setSearchContent}) {
  const onSearch = (e) => {
    window.open(`${uri}${encodeURIComponent(search)}`);
  };
  return (
    <div onClick={onSearch} className="cursor-pointer m-3">
      <img className="h-10" src={icon} alt={title} />
    </div>
  );
}

export {SearchButton};
