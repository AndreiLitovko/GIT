import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PagePagination = ({
  numOfPages,
  handleSetPage,
  page,
  decreasePageValue,
  increasePageValue,
}) => {
  const numbers = Array.from({ length: numOfPages }, (_, i) => i + 1);
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];

  return (
    <Pagination className="my-6 dark:text-white">
      <PaginationContent>

        {page === firstNumber || (
          <PaginationItem>
            <PaginationPrevious onClick={decreasePageValue} />
          </PaginationItem>
        )}
        {numbers.map((num) => (
          <PaginationItem key={num}>
            {num === page ? (
              <PaginationLink onClick={() => handleSetPage(num)} isActive>
                {num}
              </PaginationLink>
            ) : (
              <PaginationLink onClick={() => handleSetPage(num)}>{num}</PaginationLink>
            )}
          </PaginationItem>
        ))}
        {page === lastNumber || (
          <PaginationItem>
            <PaginationNext onClick={increasePageValue} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PagePagination;
