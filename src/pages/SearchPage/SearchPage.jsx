import { Row, Col, Stack } from "react-bootstrap";

import { CATEGORIES } from "../../data/categories";

import RecipeList from "../../components/RecipeList/RecipeList";
import SearchInput from "../../components/SearchInput/SearchInput";
import FilterSidebar from "../../components/CategoryFilter/FilterSidebar";

import useSearch from "../../hooks/useSearch";
import { useRecipes } from "../../context/recipesContext";

export default function SearchPage() {
    const allRecipes = useRecipes();
    const {
        currentRecipes, 
        query, 
        selectedCategories, 
        setQuery, 
        toggleCategory
    } = useSearch(allRecipes);
    
    return(
        <Row>
            <Col md={10}>
                <Stack className="gap-3">
                    <SearchInput onSearch={setQuery}  />
                    <RecipeList recipes={currentRecipes}/>
                </Stack>
            </Col>
            <Col md={2}>
                <FilterSidebar 
                    points={CATEGORIES} 
                    selectedPoints={selectedCategories} 
                    onFilterClick={toggleCategory} 
                />
            </Col>
        </Row>
    );
}