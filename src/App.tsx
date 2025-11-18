import { DynamicStyleComponent } from "./utils";

const App = () => {
    return (
        <>
            <div
                style={{
                    display: "block",
                    width: "100%",
                    "background-color": "black",
                    opacity: "0.3",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    "z-index": "-1",
                }}
            />
            <div
                style={{
                    height: "100vh",
                    "justify-content": "center",
                    "align-items": "center",
                    // "text-shadow": "2px 2px 5px black",
                    color: "white",
                }}
            >
                <img
                    style={{
                        "border-radius": "50%",
                        height: "300px",
                        width: "auto",
                        margin: "30px",
                        border: "5px black solid",
                    }}
                    src="/linkedInPic.jpg"
                    alt="Me"
                />
                <h1
                    style={{
                        "font-size": "150px",
                    }}
                >
                    Hello!
                </h1>
                <span
                    style={{
                        "font-size": "50px",
                    }}
                >
                    I'm Ben!
                </span>

                <div
                    style={{
                        width: "100%",
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
