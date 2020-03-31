export async function fetchReq(keyword, setState) {
  setState(st => ({ ...st, loading: true }));
  const req = await fetch(
    `https://www.instagram.com/web/search/topsearch/?context=blended&query=%23${keyword}&rank_token=5&include_reel=true`
  );
  const res = await req.json();
  console.log(res);
  const hashtag = res.hashtags
    .map(hash => ({
      tag: hash.hashtag.name,
      posts: hash.hashtag.search_result_subtitle,
      count: hash.hashtag.media_count
    }))
    .sort((a, b) => b.count - a.count);
  setState(st => ({ data: hashtag, loading: false }));
  return hashtag;
}

let timeot = null;
export async function fetchReq2(keyword) {
  clearTimeout(timeot);
  timeot = setTimeout(async () => {
    const req = await fetch(
      `https://www.instagram.com/explore/tags/${keyword}/?__a=1`
    );
    const res = await req.json();
    const hashArr = res.graphql.hashtag.edge_hashtag_to_related_tags.edges.map(
      hash => hash.node.name
    );
    hashArr.forEach(item => {
      fetchReq(item);
    });
  }, 1000);

  return;
}
