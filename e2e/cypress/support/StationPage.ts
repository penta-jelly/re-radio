import LoginPage from './authentication/LoginPage';
import { stubGraphql } from './commands/mockGraphql';

export default (url = '/station') => ({
  elements: {
    player: {
      container: '#station-player',
    },
    playlist: {
      container: '#playlist-container',
    },
    addSong: {
      searchSongInput: '#search-song-input',
      closeIconButton: '#close-button',
      searchButton: '#search-button',
      searchSongMenu: '#search-song-menu',
      searchSongItem: '#search-song-item',
      defaultPreviewSongCover: '#default-preview-cover',
      previewSongImage: '#preview-image',
      previewSongTitle: '#preview-song-title',
      previewSongChannel: '#preview-song-channel',
      songCreator: '#song-creator',
      submitSongButton: '#submit-song-button',
      addSongFab: '#add-song-fab',
    },
  },

  navigate(slug: string, withCredential?: boolean) {
    this.stubGraphql();
    if (withCredential) {
      const loginPage = LoginPage();
      loginPage.login({});
    } else {
      cy.clearLocalStorage();
    }
    cy.visit(`${url}/${slug}`);
  },

  clickAddSongFab() {
    cy.get(this.elements.addSong.addSongFab).should('be.visible').click().wait(300);
  },

  checkRenderingOfAddSong() {
    cy.get(this.elements.addSong.searchSongInput).should('be.visible');
    cy.get(this.elements.addSong.searchSongInput).should('have.value', '');

    cy.get(this.elements.addSong.searchButton).should('be.visible');
    cy.get(this.elements.addSong.closeIconButton).should('not.exist');

    cy.get(this.elements.addSong.defaultPreviewSongCover).should('be.visible');

    cy.get(this.elements.addSong.submitSongButton).should('be.exist');
    cy.get(this.elements.addSong.submitSongButton).should('have.attr', 'disabled');
  },

  searchSong(query: string) {
    cy.get(this.elements.addSong.searchSongInput).type(query);
    cy.get(this.elements.addSong.closeIconButton).should('be.visible');
    cy.get(this.elements.addSong.searchButton).should('not.exist');
    cy.get(this.elements.addSong.searchSongMenu).should('be.visible');
    cy.get(this.elements.addSong.searchSongMenu).children().should('have.length', 5);
  },

  checkRenderingOfPreviewSong() {
    cy.get(this.elements.addSong.searchSongMenu).children().first().click();

    cy.get(this.elements.addSong.previewSongImage).should('be.visible');
    cy.get(this.elements.addSong.previewSongTitle).should('be.visible');
    cy.get(this.elements.addSong.songCreator).should('be.visible');
    cy.get(this.elements.addSong.submitSongButton).should('not.have.attr', 'disabled');
  },

  addSong() {
    cy.wait(1000);
    cy.get(this.elements.addSong.submitSongButton).click();
  },

  stubGraphql() {
    stubGraphql({
      operation: 'YoutubeVideos',
      response: {
        data: {
          youtubeVideos: [
            {
              id: 'YQHsXMglC9A',
              snippet: {
                publishedAt: '2015-10-23T06:54:18.000Z',
                channelId: 'UComP_epzeKzvBX156r6pm1Q',
                title: 'Adele - Hello',
                description:
                  "‘Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nDirected by Xavier Dolan, @XDolan\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nhttp://vevo.ly/jzAuJ1\n\nCommissioner: Phil Lee\nProduction Company: Believe Media/Sons of Manual/Metafilms\nDirector: Xavier Dolan\nExecutive Producer: Jannie McInnes\nProducer: Nancy Grant/Xavier Dolan\nCinematographer:  André Turpin\nProduction design : Colombe Raby\nEditor: Xavier Dolan\nAdele's lover : Tristan Wilds",
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg',
                    width: 120,
                    height: 90,
                    __typename: 'Thumbnail',
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg',
                    width: 320,
                    height: 180,
                    __typename: 'Thumbnail',
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
                    width: 480,
                    height: 360,
                    __typename: 'Thumbnail',
                  },
                  standard: {
                    url: 'https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg',
                    width: 640,
                    height: 480,
                    __typename: 'Thumbnail',
                  },
                  maxres: {
                    url: 'https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                    __typename: 'Thumbnail',
                  },
                  __typename: 'Thumbnails',
                },
                channelTitle: 'AdeleVEVO',
                __typename: 'Snippet',
              },
              __typename: 'YoutubeVideo',
            },
            {
              id: 'UBYnT8JY7sE',
              snippet: {
                publishedAt: '2010-07-25T07:29:15.000Z',
                channelId: 'UCc8fZTZpS6XykoykqVjabaA',
                title: 'Lionel Richie - Hello [LYRICS]',
                description: 'Lionel Richie - Hello with LYRICS',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/UBYnT8JY7sE/default.jpg',
                    width: 120,
                    height: 90,
                    __typename: 'Thumbnail',
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/UBYnT8JY7sE/mqdefault.jpg',
                    width: 320,
                    height: 180,
                    __typename: 'Thumbnail',
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/UBYnT8JY7sE/hqdefault.jpg',
                    width: 480,
                    height: 360,
                    __typename: 'Thumbnail',
                  },
                  standard: null,
                  maxres: null,
                  __typename: 'Thumbnails',
                },
                channelTitle: 'acidburn950',
                __typename: 'Snippet',
              },
              __typename: 'YoutubeVideo',
            },
            {
              id: 'M5azNpTwVk8',
              snippet: {
                publishedAt: '2020-03-26T16:26:30.000Z',
                channelId: 'UCnBkqftMxYPr0ib_9cUA5xw',
                title: 'Hello (from the Inside) An Adele Parody by Chris Mann',
                description:
                  '#WithMe\nStream on Spotify: https://spoti.fi/2WJmcEX\nStream on Apple Music: http://bit.ly/chrismannapplemusic\nBooking: admin@chrismannmusic.com\nWritten and recorded by Chris Mann on Garage Band.  Shot on iPhone.  Edited on iMovie.  Co-Directed by Chris and Laura Mann.\n* Instagram: https://www.instagram.com/chrismannmusic/\n* Facebook: https://www.facebook.com/chrismannmusic/\n* Twitter: https://twitter.com/iamchrismann \n* Medium: https://medium.com/@IamChrisMann\n* Web: http://www.chrismannmusic.com/\n* Newsletter: https://bit.ly/ChrisMannEmail',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/M5azNpTwVk8/default.jpg',
                    width: 120,
                    height: 90,
                    __typename: 'Thumbnail',
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/M5azNpTwVk8/mqdefault.jpg',
                    width: 320,
                    height: 180,
                    __typename: 'Thumbnail',
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/M5azNpTwVk8/hqdefault.jpg',
                    width: 480,
                    height: 360,
                    __typename: 'Thumbnail',
                  },
                  standard: {
                    url: 'https://i.ytimg.com/vi/M5azNpTwVk8/sddefault.jpg',
                    width: 640,
                    height: 480,
                    __typename: 'Thumbnail',
                  },
                  maxres: {
                    url: 'https://i.ytimg.com/vi/M5azNpTwVk8/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                    __typename: 'Thumbnail',
                  },
                  __typename: 'Thumbnails',
                },
                channelTitle: 'Chris Mann Music',
                __typename: 'Snippet',
              },
              __typename: 'YoutubeVideo',
            },
            {
              id: 'bFhQL130aYQ',
              snippet: {
                publishedAt: '2018-08-01T12:30:01.000Z',
                channelId: 'UCCokp1i9n_aue7zTjGoBJRQ',
                title:
                  'Hello | Đàm Vĩnh Hưng x Binz | Hương Giang, Trấn Thành, Thánh Catwalk Sinon, Hữu Vi | Official MV',
                description:
                  'Bài hát: Hello \nCa sỹ: Đàm Vĩnh Hưng x Binz\nKhách mời: Hương Giang, Trấn Thành, Thánh Catwalk Sinon, Hữu Vi, Lương Bằng Quang, Tuyền Mập, Chi Mập\n#hello #damvinhhung #binz\n---------------------------\nDirected by: Đinh Hà Uyên Thư\nProducer & Creative Director: Lâm Thành Kim\nMusic composer: Lương Bằng Quang\nRecording studio: Q.Studio\nDance crew: Bước Nhảy\nExecutive producer: Lương Minh Hồng\nProject supervisor: An Nguyễn\nDOP: Tùng Bùi\n1st AD: Lê Hoàng Phương\nCamera Operator: Mr. Blue\nFocus puller: Duy VK\nUnit production manager: Mr. Blue\nProduction designer: Do Ba Ty Team\nAssistants Production: Min Trần\nEditor: BR.\nPost Production & Colorist: Mr. Blue\nBTS Photo - Video: Rickson - Minh Vương - D.A Nguyễn\nCamera equipment: Cinelight\nStabilizers & Gimbals & Drone equipment: Thông Kiều\nAssistants Production Manager: Tiet Tee - D.A Nguyễn - Mr Ân\nSpecial effects: Ngô Quốc Duy\nStylist: Lê Minh Ngọc\nStylist Assistant: Nguyễn Đức Quân - Phùng Ngọc Thu - Tô Trịnh Bá Lộc - Nhiên Hạo - Diệu Vĩ - Nhân - Bình Trần\nDesigner: Lý Giám Tiền - Chung Thanh Phong - Lâm Giang Khang\nAccessories: Lovisa - Floral Punk\nCostume: Dolce & Gabbana - Versace - Kenzo - Dsquared2 - Trendiano - DVSK - Zara - Massimo Dutti\nMakeup & Hair: Quang Nguyễn Team\nShoes: Christian Louboutin\nPR Manager: Nguyễn Ngọc Thanh Dân\nPhotographer: Khoa Nguyễn - Hải Nguyễn - Thành Phạm\nGraphic designer: Việt Nguyễn\n\nVideo produced by Blue Production Team\n----------------------------\nĐể cập nhật thông tin chi tiết của ca sĩ Đàm Vĩnh Hưng & công ty Giải Trí Tiếng Hát Việt vui lòng xem tại:\nWebsite: http://www.damvinhhung.ws\nYoutube: http://www.youtube.com/user/DamVinhHungPOPS\nFanpage Đàm Vĩnh Hưng: https://www.facebook.com/dvhfanpage\nFacebook Công ty giải trí tiếng hát việt:  https://www.facebook.com/mrdampf\nFanpage Công ty giải trí tiếng hát việt: https://www.facebook.com/CongTyGiaiTriTiengHatViet\nEmail: info@tienghatviet.vn\n\n#damvinhhung#binz#tranthanh#hello#nhactre#musicvideo',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/bFhQL130aYQ/default.jpg',
                    width: 120,
                    height: 90,
                    __typename: 'Thumbnail',
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/bFhQL130aYQ/mqdefault.jpg',
                    width: 320,
                    height: 180,
                    __typename: 'Thumbnail',
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/bFhQL130aYQ/hqdefault.jpg',
                    width: 480,
                    height: 360,
                    __typename: 'Thumbnail',
                  },
                  standard: {
                    url: 'https://i.ytimg.com/vi/bFhQL130aYQ/sddefault.jpg',
                    width: 640,
                    height: 480,
                    __typename: 'Thumbnail',
                  },
                  maxres: {
                    url: 'https://i.ytimg.com/vi/bFhQL130aYQ/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                    __typename: 'Thumbnail',
                  },
                  __typename: 'Thumbnails',
                },
                channelTitle: 'Đàm Vĩnh Hưng',
                __typename: 'Snippet',
              },
              __typename: 'YoutubeVideo',
            },
            {
              id: 'DfG6VKnjrVw',
              snippet: {
                publishedAt: '2015-11-09T19:50:38.000Z',
                channelId: 'UComP_epzeKzvBX156r6pm1Q',
                title: 'Adele - Hello (Live at the NRJ Awards)',
                description:
                  "‘Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nCopyright: TF1 Production\nDirector: Tristan Carné\n\nhttp://vevo.ly/sA14tV\nPlaylist Best of Adele https://goo.gl/YWgJtE\nSubscribe for more https://goo.gl/xrpGsB\nBest of Adele: https://goo.gl/DSt4mS\nSubscribe here: https://goo.gl/6hEDrd",
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/DfG6VKnjrVw/default.jpg',
                    width: 120,
                    height: 90,
                    __typename: 'Thumbnail',
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/DfG6VKnjrVw/mqdefault.jpg',
                    width: 320,
                    height: 180,
                    __typename: 'Thumbnail',
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/DfG6VKnjrVw/hqdefault.jpg',
                    width: 480,
                    height: 360,
                    __typename: 'Thumbnail',
                  },
                  standard: {
                    url: 'https://i.ytimg.com/vi/DfG6VKnjrVw/sddefault.jpg',
                    width: 640,
                    height: 480,
                    __typename: 'Thumbnail',
                  },
                  maxres: {
                    url: 'https://i.ytimg.com/vi/DfG6VKnjrVw/maxresdefault.jpg',
                    width: 1280,
                    height: 720,
                    __typename: 'Thumbnail',
                  },
                  __typename: 'Thumbnails',
                },
                channelTitle: 'AdeleVEVO',
                __typename: 'Snippet',
              },
              __typename: 'YoutubeVideo',
            },
          ],
        },
      },
    });
    stubGraphql({
      operation: 'YoutubeVideo',
      response: {
        data: {
          youtubeVideo: {
            id: 'YQHsXMglC9A',
            snippet: {
              publishedAt: '2015-10-23T06:54:18.000Z',
              channelId: 'UComP_epzeKzvBX156r6pm1Q',
              title: 'Adele - Hello',
              description:
                "‘Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nDirected by Xavier Dolan, @XDolan\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nhttp://vevo.ly/jzAuJ1\n\nCommissioner: Phil Lee\nProduction Company: Believe Media/Sons of Manual/Metafilms\nDirector: Xavier Dolan\nExecutive Producer: Jannie McInnes\nProducer: Nancy Grant/Xavier Dolan\nCinematographer:  André Turpin\nProduction design : Colombe Raby\nEditor: Xavier Dolan\nAdele's lover : Tristan Wilds",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg',
                  width: 120,
                  height: 90,
                  __typename: 'Thumbnail',
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg',
                  width: 320,
                  height: 180,
                  __typename: 'Thumbnail',
                },
                high: {
                  url: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
                  width: 480,
                  height: 360,
                  __typename: 'Thumbnail',
                },
                standard: {
                  url: 'https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg',
                  width: 640,
                  height: 480,
                  __typename: 'Thumbnail',
                },
                maxres: {
                  url: 'https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg',
                  width: 1280,
                  height: 720,
                  __typename: 'Thumbnail',
                },
                __typename: 'Thumbnails',
              },
              channelTitle: 'AdeleVEVO',
              __typename: 'Snippet',
            },
            contentDetails: { duration: 367000, dimension: '2d', caption: 'false', __typename: 'ContentDetails' },
            __typename: 'YoutubeVideoDetail',
          },
        },
      },
    });
  },
});
