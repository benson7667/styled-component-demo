import React from "react";
import { any, func, string } from "prop-types";
import { FiChevronRight } from "react-icons/fi";
import { StyledSectionWrapper, SectionTitle, HasMoreText } from "./styles";

const SectionWrapper = (props) => {
  const { title, hasMore, handleOnClickMore } = props;

  return (
    <StyledSectionWrapper onClick={handleOnClickMore} title={title}>
      <SectionTitle hasMore={hasMore}>
        {title}
        {hasMore && (
          <HasMoreText>
            更多 <FiChevronRight />
          </HasMoreText>
        )}
      </SectionTitle>

      {props.children}
    </StyledSectionWrapper>
  );
};

SectionWrapper.propTypes = {
  title: string.isRequired,
  children: any.isRequired,
  handleOnClickMore: func,
};

export default SectionWrapper;
