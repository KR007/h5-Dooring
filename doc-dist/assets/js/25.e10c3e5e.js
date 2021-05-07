(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    396: function(t, s, a) {
      'use strict';
      a.r(s);
      var n = a(42),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s;
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('p', [
                a('strong', [t._v('H5-Dooring')]),
                t._v('全面支持第三方对象存储服务, 我们以七牛云对象存储为例.'),
              ]),
              t._v(' '),
              a('h3', { attrs: { id: '前端上传文件到oss' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#前端上传文件到oss' } }, [
                  t._v('#'),
                ]),
                t._v(' 前端上传文件到oss'),
              ]),
              t._v(' '),
              a('p', [
                t._v(
                  '首先我们需要在第三方对象储存服务中配置对应的服务和域名. 其次安装对应的sdk, 如七牛云sdk:',
                ),
              ]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('import')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('*')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('as')]),
                    t._v(' qiniu '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('from')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'qiniu-js'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n'),
                  ]),
                ]),
              ]),
              a('p', [
                t._v('其次我们修改'),
                a('code', [t._v('h5_plus')]),
                t._v('工程的'),
                a('code', [t._v('Upload')]),
                t._v('组件, 详细地址为'),
                a('code', [t._v('src/core/FormComponents/Upload')]),
                t._v('.'),
              ]),
              t._v(' '),
              a('p', [t._v('修改内容如下:')]),
              t._v(' '),
              a('div', { staticClass: 'language-js extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' fileName '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' file'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('name\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' suffix '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'自定义文件后缀'"),
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' putExtra '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    fname'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' fileName'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    params'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' uid '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('new')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token class-name' } }, [t._v('Date')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('uuid')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('16')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('+')]),
                    t._v(' suffix\n'),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v(
                        '// 使用七牛云上传api, 前提是提前在前端拿到对应的ticket, 可以通过请求的方式获取',
                      ),
                    ]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' observe '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' qiniu'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('upload')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('file'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' uid'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('state'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('qnToken'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('ticket'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' putExtra'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\nobserve'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('subscribe')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token parameter' } }, [t._v('res')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=>')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                      t._v('// 拼接路径'),
                    ]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' url '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token template-string' } }, [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token template-punctuation string' } },
                        [t._v('`')],
                      ),
                      a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token interpolation-punctuation punctuation' },
                          },
                          [t._v('${')],
                        ),
                        a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('state'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('qnToken'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('domain'),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token interpolation-punctuation punctuation' },
                          },
                          [t._v('}')],
                        ),
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v('/')]),
                      a('span', { pre: !0, attrs: { class: 'token interpolation' } }, [
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token interpolation-punctuation punctuation' },
                          },
                          [t._v('${')],
                        ),
                        t._v('res'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                        t._v('key'),
                        a(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token interpolation-punctuation punctuation' },
                          },
                          [t._v('}')],
                        ),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token template-punctuation string' } },
                        [t._v('`')],
                      ),
                    ]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token comment' } }, [t._v('// 存库')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('const')]),
                    t._v(' fileList '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v(' uid'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' name'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' fileName'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' status'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'done'")]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v(' url '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(';')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('setState')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n        curImgUrl'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' url'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n        fileList\n    '),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n    '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('props'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('onChange '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('&&')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('this')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    t._v('props'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('.')]),
                    a('span', { pre: !0, attrs: { class: 'token function' } }, [t._v('onChange')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('(')]),
                    t._v('fileList'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(')')]),
                    t._v('\n'),
                  ]),
                ]),
              ]),
              a('p', [
                t._v('其他oss服务类似, 如果不清楚如何配置, 可以在'),
                a(
                  'a',
                  {
                    attrs: {
                      href: 'http://h5.dooring.cn/',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [t._v('H5-Dooring官网'), a('OutboundLink')],
                  1,
                ),
                t._v('中找到我们.'),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      s.default = e.exports;
    },
  },
]);