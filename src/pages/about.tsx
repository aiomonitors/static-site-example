import React from 'react';
import styled from 
	'styled-components';

const IndexPage = () => (
	<IndexPageWrapper>
		<span>About me</span>
	</IndexPageWrapper>
);

const IndexPageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


export default IndexPage;
