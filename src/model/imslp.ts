export default class Imslp {
  result: {
    '곡 제목': string,
    '작곡가': string,
    'Opus/Catalogue 번호': string,
    '조': string,
    '악장/섹션': string[],
    '작곡년월': string,
    '평균 길이': string,
    '작곡시기': string,
    '곡 스타일': string,
    '악기별': string
  }

  methodName(anchors: Element[]) {
    const content = anchors.map((anchor) => {
      const th: string = anchor.querySelector('th').textContent.trim();
      const td: string = anchor.querySelector('td').textContent.trim();
      return { [th]: td };
    });
    const contents = content.filter(x => this.result.hasOwnProperty(Object.keys(x)[0]) ? Object.keys(x)[0] : undefined)
    contents.map((content) => {
      const key = Object.keys(content)[0]
      const value = Object.values(content)
      this.result[key] = value
    })
  }
};
