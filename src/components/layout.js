import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { PageContainer, ContentWrapper } from "../styling/layout"; 

const Layout = ({ children }) => {
    return (
        <PageContainer>
            <Header />  
            <ContentWrapper>
                {children} 
            </ContentWrapper>
            <Footer /> 
        </PageContainer>
    );
};

export default Layout;