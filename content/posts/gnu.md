+++
title = "How To Add GNU Terry Pratchett To Hugo + Zeit Now"
date = 2020-01-19T13:27:05.699Z
tags = ["how to", "hugo", "zeit now"]
categories = ["how to", "web"]
+++

## What is GNU Terry Pratchett?
GNU Terry Pratchett is a project to pay homage to the great late **Sir Terry Pratchett** and his legacy, his series of Discworld novels. In the books there is a communication system in place across the land where information can be passed around at the speed of light called the "*Clacks*", this information can include an overhead much like the headers in websites and is used in the books to remember the inventor's lost son by mentioning his name in the overhead, thereby keeping his memory alive forever in the network. The GNU Terry Pratchett project ([found here](http://www.gnuterrypratchett.com/)) is all about inserting the message "*GNU Terry Pratchett*" into the headers of websites to do much the same.

There's also an extension for many browsers to show when the website you're visiting has the clacks header.

## How to add it to a Hugo + Zeit Now website
Zeit Now is a fantastic service and has a very generous free tier, you can sign up [here](https://zeit.co).

To add the header just create a now.json file (if you don't already have one) in the root directory of your website, inserting the following configuration:
```javascript
{
    "version": 2,
    "public": true,
    "headers": [
        {
            "source": "/*.*",
            "headers": [
                {
                    "key": "X-Clacks-Overhead",
                    "value": "GNU Terry Pratchett"
                },
                {
                    "key": "Cache-Control",
                    "value": "public, max-age=31536000"
                },
                {
                    "key": "Access-Control-Allow-Origin",
                    "value": "*"
                }
            ]
        }
    ]
}
```

You can remove these bits if you like but they're good for website performance.

```javascript
{
	"key": "Cache-Control",
	"value": "public, max-age=31536000"
},
{
	"key": "Access-Control-Allow-Origin",
	"value": "*"
}
```
