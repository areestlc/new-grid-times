import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionVerticalStoryWrapper key={story.id}>
              <OpinionStory key={story.id} {...story} />
            </OpinionVerticalStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const MainStorySection = styled.section`
  grid-area: main-story;
  margin-bottom: 36px;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: calc(var(--grid-gap) / 2);
    margin-right: calc(-1 * (var(--grid-gap) / 2));
    margin-bottom: 0;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: calc(var(--grid-gap) / 2);
    margin-right: calc(-1 * (var(--grid-gap) / 2));
  }
`;

const Wrapper = styled.div`
  --grid-gap: 32px;

  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: var(--grid-gap);
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories'
    ;
    grid-template-columns: 2fr 1fr;

    & ${SecondaryStorySection} {
      border-left: 1px solid var(--color-gray-300);
      padding-left: calc(var(--grid-gap) / 2);
      margin-left: calc(-1 * (var(--grid-gap) / 2));
    }
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    gap: 32px;
  }
`;

const VerticalStoryWrapper = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;

const OpinionVerticalStoryWrapper = styled(VerticalStoryWrapper) `
  flex: 1;

  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      border-bottom: revert;
      margin-bottom: revert;
      padding-bottom: revert;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 1px solid var(--color-gray-300);
    padding-top: calc(var(--grid-gap) / 2);
    margin-top: calc(-1 * (var(--grid-gap) / 2));
    padding-bottom: 16px;
  }
`;

export default MainStoryGrid;
