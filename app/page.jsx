import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover and Share {' '}
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompt</span>
        </h1> {/*yedi classname ma _ aye afnei css file wala class ho */}
        <p className="desc text-center">
            Prompter is an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </p>
        <Feed/>
    </section>
  )
}

export default Home
