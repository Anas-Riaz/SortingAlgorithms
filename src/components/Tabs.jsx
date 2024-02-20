export default function Tabs({children, Button, buttonContainer="menu"}){
    const ButtonContainer = buttonContainer;
    return <>
        <ButtonContainer>{Button}</ButtonContainer>
        {children}
    </>
}