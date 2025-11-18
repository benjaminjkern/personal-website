import Canvas from "./Canvas";
import { DynamicStyleComponent } from "./utils";

const App = () => {
    return (
        <>
            <Canvas />
            <div
                style={{
                    height: "100vh",
                    position: "relative",
                    "min-height": "700px",
                    "justify-content": "center",
                    "align-items": "center",
                    // "text-shadow": "2px 2px 5px black",
                    color: "white",
                }}
            >
                <DynamicStyleComponent
                    elementName="img"
                    style={{
                        "border-radius": "50%",
                        width: "auto",
                        margin: "30px",
                        border: "5px black solid",
                    }}
                    dynamicStyle={{
                        height: "300px",
                        "@media screen and ((max-width: 500px) or (max-height: 850px))":
                            {
                                "&": {
                                    height: "200px",
                                },
                            },
                    }}
                    src="/linkedInPic.jpg"
                    alt="Me (Ben Kern)"
                />
                <DynamicStyleComponent
                    elementName="h1"
                    dynamicStyle={{
                        "font-size": "150px",
                        "@media screen and ((max-width: 800px) or (max-height: 950px))":
                            {
                                "&": { "font-size": "100px" },
                            },
                        "@media screen and ((max-width: 500px) or (max-height: 850px))":
                            {
                                "&": { "font-size": "70px" },
                            },
                    }}
                >
                    Hello!
                </DynamicStyleComponent>
                <DynamicStyleComponent
                    elementName="h1"
                    dynamicStyle={{
                        "font-size": "50px",
                        "@media screen and ((max-width: 800px) or (max-height: 950px))":
                            {
                                "&": { "font-size": "30px" },
                            },
                        "@media screen and ((max-width: 500px) or (max-height: 850px))":
                            {
                                "&": { "font-size": "20px" },
                            },
                    }}
                >
                    I'm Ben!
                </DynamicStyleComponent>

                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        bottom: 0,
                        "align-items": "center",
                        gap: "10px",
                    }}
                >
                    <div
                        style={{
                            "flex-direction": "row",
                        }}
                    >
                        <CircleLink
                            href="https://www.linkedin.com/in/benjamin-j-kern/"
                            icon="fa-linkedin"
                        />
                        <CircleLink
                            href="https://www.github.com/benjaminjkern"
                            icon="fa-github"
                        />
                        <CircleLink
                            href="mailto:hi@benjaminjkern.com?Subject=Hi Ben, you seem cool"
                            icon="fa-envelope"
                        />
                    </div>
                    <DynamicStyleComponent
                        elementName="a"
                        href="https://benjaminjkern.com/resume"
                        style={{
                            "text-decoration": "none",
                            padding: "5px",
                            "border-radius": "50px",
                            color: "black",
                            margin: "20px",
                            "margin-top": "10px",
                            "max-width": "190px",
                            "font-size": "20px",
                            "justify-content": "center",
                            "align-items": "center",
                            display: "flex",
                            height: "50px",
                            width: "100%",
                            transition: "background-color 0.1s",
                        }}
                        dynamicStyle={{
                            "background-color": "white",
                            "&:hover": {
                                backgroundColor: "#a185c5",
                            },
                        }}
                    >
                        Resumé
                    </DynamicStyleComponent>
                </div>
            </div>
        </>
    );
};

const CircleLink = (props: { href: string; icon: string }) => {
    return (
        <DynamicStyleComponent
            elementName="a"
            href={props.href}
            style={{
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
                "text-decoration": "none",
                height: "50px",
                width: "50px",
                "font-size": "28px",
                "border-radius": "50%",
                color: "black",
                "margin-right": "10px",
                "margin-left": "10px",
                // "text-shadow": "0px 0px 5px black",
                transition: "background-color 0.1s",
            }}
            dynamicStyle={{
                "background-color": "white",
                "&:hover": {
                    "background-color": "#a185c5",
                },
            }}
        >
            <i class={`fa ${props.icon}`} aria-hidden="true" />
        </DynamicStyleComponent>
    );
};

export default App;
