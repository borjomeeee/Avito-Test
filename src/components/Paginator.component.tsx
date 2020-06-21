import React from "react";

type IPaginatorComponent = {
  selectedPage: number;
  itemsCount: number;

  onSelect: (value: number) => void;
};

const PaginatorComponent = ({
  selectedPage,
  itemsCount,
  onSelect,
}: IPaginatorComponent) => {
  const pages = [];
  const maxCountPages =
    itemsCount % 10 === 0 ? itemsCount / 10 : Math.floor(itemsCount / 10) + 1;

  if (selectedPage <= 5) {
    let numPages = maxCountPages > 10 ? 10 : maxCountPages
    for (let i = 0; i < numPages ; i++) {
      pages.push(i + 1);
    }
  } else {
    let lastPage =
      maxCountPages - selectedPage > 5 ? selectedPage + 5 : maxCountPages;

    for (let i = lastPage - 10; i < lastPage; i++) {
      pages.push(i + 1);
    }
  }

  return (
    <div className="paginator">
      {pages.map((item: number) =>
        item !== selectedPage ? (
          <div
            className="paginator__element"
            key={item}
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        ) : (
          <div className="paginator__element paginator__element-selected" key={item}>
            {item}
          </div>
        )
      )}
    </div>
  );
};

export default PaginatorComponent;
