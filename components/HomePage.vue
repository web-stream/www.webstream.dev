<template>
  <div class="bg-webstream">
    <BannerTop
      bannerText="We are improving the <b>WebStream</b>! Subscribe newsletter to stay up to date."
      bannerTarget="/"
    />
    <AppHeader :links="linkList"/>
    <AppBlurBackgroundMenu :links="linkList" />
    <SectionLanding />
    <div class="float-left font-SourceSansPro bg-white w-full" style="color: black">
      <SectionEditor />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        {
          title: "Discover",
          items: [
            {
              title: "Showcases",
              subtitle: "Selection of website built with WebStream",
              slug: "showcases",
              to: "/showcases",
              md: "https://showcases.webstream.dev/README.md",
              icon: "showcases.svg",
              color: "bg-sand",
            },
            {
              title: "Case studies",
              subtitle: "How companies use Webstream",
              slug: "case-studies",
              to: "/case-studies",
              md: "case-studies.webstream.dev",
              icon: "case-studies.svg",
              color: "bg-sand-darker",
            },
            {
              title: "Testimonials",
              subtitle: "What they think about us",
              slug: "testimonials",
              to: "/testimonials",
              md: "testimonials.webstream.dev",
              icon: "testimonials.svg",
              color: "bg-sand-darkerer",
            },
          ],
        },
        {
          title: "Learn",
          items: [
            {
              title: "Docs",
              subtitle: "Create fast websites easily",
              slug: "docs",
              to: "/docs",
              md: "docs.webstream.dev",
              icon: "docs.svg",
              color: "bg-green-500",
            },
            {
              title: "Examples",
              subtitle: "Understand everything in Webstream",
              slug: "examples",
              to: "/examples",
              md: "https://web-stream.github.io/examples/README.md",
              icon: "examples.svg",
              color: "bg-green-600",
            },
            {
              title: "Tutorials",
              subtitle: "Learn with concrete cases",
              slug: "tutorials",
              to: "/tutorials",
              md: "tutorials.webstream.dev",
              icon: "tutorials.svg",
              color: "bg-green-700",
            },
            {
              title: "Master courses",
              subtitle: "Learn more with experts",
              href: "https://courses.webstream.dev",
              icon: "master-courses.svg",
              color: "bg-green-800",
            },
          ],
        },
        {
          title: "Explore",
          items: [
            {
              title: "Deployments",
              subtitle: "How to Deploy WebStream",
              slug: "deployments",
              to: "/deployments",
              md: "deployments.webstream.dev",
              icon: "deployments.svg",
              color: "bg-indigo-light",
            },
            {
              title: "Modules",
              subtitle: "Extend the power of Webstream",
              slug: "modules",
              to: "/modules",
              md: "modules.webstream.dev",
              icon: "modules.svg",
              color: "bg-indigo",
            },
            {
              title: "Themes",
              subtitle: "Get started with themes",
              slug: "themes",
              to: "/themes",
              md: "themes.webstream.dev",
              icon: "themes.svg",
              color: "bg-indigo-darker",
            },
            {
              title: "Video Courses",
              subtitle: "Learn step by step",
              slug: "video-courses",
              to: "/video-courses",
              md: "courses.webstream.dev",
              icon: "video-courses.svg",
              color: "bg-indigo-darkerer",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              title: "Announcements",
              subtitle: "Last news about Webstream",
              slug: "announcements",
              to: "/announcements",
              md: "announcements.webstream.dev",
              icon: "announcements.svg",
              color: "bg-mint-light",
            },
            {
              title: "Teams",
              subtitle: "They are Webstream",
              slug: "teams",
              to: "/teams",
              md: "showcases.webstream.dev",
              icon: "teams.svg",
              color: "bg-mint-light",
            },
            {
              title: "Events",
              subtitle: "When and where we gonna be",
              slug: "events",
              to: "/events",
              md: "events.webstream.dev",
              icon: "events.svg",
              color: "bg-mint",
            },
            {
              title: "Releases",
              subtitle: "All the code we released",
              slug: "releases",
              to: "/releases",
              md: "releases.webstream.dev",
              icon: "releases.svg",
              color: "bg-mint",
            },
            {
              title: "Sponsors",
              subtitle: "They trust us",
              slug: "sponsors",
              to: "/sponsors",
              md: "sponsors.webstream.dev",
              icon: "sponsors.svg",
              color: "bg-mint-darker",
            },
            {
              title: "Tweets",
              subtitle: "They talk about us",
              href: "https://twitter.com/webstream_dev/timelines/*",
              icon: "tweets.svg",
              color: "bg-mint-darker",
            },
          ],
        },
        { title: "Partners", slug: "partners", to: "/partners" },
      ],
    };
  },
};
</script>
