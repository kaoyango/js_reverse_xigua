import json
import re
import execjs
import time
import requests
from bs4 import BeautifulSoup

print(execjs.get().name)

compile_code  = execjs.compile(open(r'.\xigu.js', 'r', encoding='utf-8').read())

def getX_Bogus(now, msToken):
    result = compile_code.call('main', now, f"debug_model=false&msToken={msToken}")
    #print(result)
    return result

def getsignature(now, tt_scid, searchurl, paramsurl):
    

    result = compile_code.call('getsignature', now, tt_scid, searchurl, paramsurl)

    #print(result)
    return result

headers = {
    'authority': 'www.ixigua.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    # Requests sorts cookies= alphabetically
    # 'cookie': 'xiguavideopcwebid=7165866385409689099; xiguavideopcwebid.sig=r1YSxYQRt2ynDGF-iOnzPb21Rpw; ttcid=73876b556fbe49da996f28328562234197; MONITOR_WEB_ID=7165866385409689099; SEARCH_CARD_MODE=7165866385409689099_1; ixigua-a-s=1; support_webp=true; support_avif=true; ttwid=1%7C80lSezWNErsgPL8x8uOfgLX97b80WPEXbBOCyxNIYvw%7C1668820338%7C2fe9d1fccfaf0da86b2beaa83df73f6b40e4b588cd1ba9567425df8fc268d445; tt_scid=.4xwP2A8DwvzPQm9ByXN0Z9Eu-x0iKXu.wnCi3QYafIIcnuUdv.NAz.7zQo792hM68e7; msToken=47QqiKKsKy2m96wcaitm4-if7oxt6AT-dhgED1iQgDgrm8KNaWfqVGZGTCqRXxBfpowJT35A9555VcJULdC4bqCWQfckaz56SECQ9f13FgXvtxUu5hn_u3e861LAXcU=',
    'pragma': 'no-cache',
    'referer': 'https://www.ixigua.com/search/love/?wid_try=1',
    'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}


search = "love"
msToken = ""
search_id = ""
session = requests.session()


def getmstoken(now, x_box):

    cookies = {
        'msToken': '4jPHrDzWsdNXhDuoXbpqpVnK3_TEj7Kd7hy6pn7mV7cE0VUA0Pg-NWFlYB_7KHcZA4kYya9ggbiMOP5fioVDtQNhADQao3tHe5nNzCrU5dHs0slXPh2L',
    }

    params = {
        'msToken': '',
        'X-Bogus': x_box,
    }

    data = '{"magic":538969122,"version":1,"dataType":8,"strData":"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","tspFromClient":'+str(now)+'}'

    response = requests.post('https://mssdk.bytedance.com/web/report', params=params, cookies=cookies, headers=headers, data=data)

    return response.headers["x-ms-token"]

def gettt_scid():

    cookies = {
    'ttcid': '70a689ced9f142c68cc179e879593f4416',
    'tt_scid': 'EsCXaPHQyglRUL9NNOvX010fQAbfUzIV5o8mNNx3g7RnRGpQRwMhPNijMYUvS3VV82ad',
    'msToken': 'fMYQz7D8dAMtGk6YnLFrZ7m55m1lO9iD8toVOy-EQX_eEAfQziD_m6QGZxW7kmNabtHHQ_rrlazop4kw0ubSVuOywfMXZ1DsKdNL4q6-WHTr0T34pqkG7dT58EMO2A==',
    }

    params = {
        'q': '0cGaTnbFyjsPR6bw8Q0+x3ZPkf9mrH4GIoatsVsRj8QbQ7kfUqIdP0IRpl6kI5SWFfwDyISciF9tVzMHAZcEOZPwUSGpDs7RCYWKEJZmDoL3AE2N9+JHq+wvRjJHDDc33QC09TT7TmVucwNr/8EXtj2gQR82rSTnqihhrgyVEZ521NVzmnmd1fwA5xm3QqZ8tBlJltRmFfbcPFOi/VRpP3g+RUwBmKnJePyBIb/eAXa16a5cwHz46uMaaBVvJtTdcCUnlmlTxRxGcJ8+O0EyqOGrbqD++8y3wgSZ4+ya+JjDH5hwbvqzyC/cLyzWPPrItXOfXyvaMV/z1525bcViadTiQx2nUA3Ad/UCidfZM+hZyGudazBl1JMA7yXpOiJuc0dNZD9eCDxrZ8FPxMHfFIerYPTguj90tSv6HwV43Z5Ai2tho9Zyi3XBJzY7uq5UckmJIDPdRSq2KFZRjULHPSRU7KUOljYN2Oc7TBGTy/S7fGcBZsAJNwZL/dhvTYk5xQc+cfJ7RQvCGMQVo/kvt2p1K7vkWIDgeW3cmQ4kLPYs4XVhissr4Hk1lMeLRP5CixoOwAMGaqoUAZk+jdSnRFrZvjFLp1DTNGYUIZcjahtZ8kEYQ1dUyULBJULs1e+z1sLxDcSTxGDsC3nZJSmMyHO7IbkztWQOkAyiJkwftAoGH9SIfnJG8lhcv5i3XwOwnCJgVAzhKd/GpScbbbd7kC45jTuPfoLOaPE3WeO08PWfJsZ7aqmI1OD3e2KxsKNKkWJyiMYv1lYuLHXy9nmRgz/k/rNLTq7DoJmGqhKkFMn5i6jc+tbMKB/ZGWOR5+R8eeh4TC5YPDc3ZzTrYUDsl1brgbnyzKvOd95XzeUYxtHJ5rKlu1HKs+AYdMRT1/nxfkSfWjCX7E3hDfwK+BpxCZdeYB6D89MPLfw+wc/AHRgzgsMjseVpzXQuzqV/bGJO/jpR90bMaGf7E+LKAzFyU2VTZkx5qLz5Ujd2R7SQDj1qMvCKxiScYO6pvyHta6p4j/ArVxZEzll0gfd4lK38vH6WcAT0f9myPa7z633z+K9rS2OiytNyJvPuLBa/jzVXQc9bRemnI8EsbZ+ldWYvjpQWNN2JBsCmQFtngTrPsmAmEphokvCm8v8dGpt8deOXuAAYg82ZvTfVLek37hSAkHNubp6C90qhoufqaT5mI/qhRRBEfJ8PsrRn8ofx0NRGRrgH0rfHRNs78oXb0NbN2pbL04sb2oX7',
        'callback': '_3175_1669003131241',
    }

    response = requests.get('https://mssdk.bytedance.com/websdk/v1/getInfo', params=params, cookies=cookies, headers=headers)
    if "fp" in response.text:
        return re.findall(r"\"fp\"\:\"(.+?)\"",response.text)[0]

def init(session,result):
    respose = session.get(f"https://www.ixigua.com/search/{search}/?wid_try=1")
    search_id =re.findall(r"\"search_id\"\:\"(.+?)\"",respose.text)[0]
    now = int(round(time.time() * 1000))
    x_box = getX_Bogus(now, "")
    msToken = getmstoken(now, x_box)
    tt_scid = gettt_scid()
    print("session.cookies", session.cookies)
    requests.utils.add_dict_to_cookiejar(session.cookies,{'msToken':msToken, tt_scid: "tt_scid"})
    print("end session.cookies", session.cookies)
    cont = respose.content.decode('utf-8','ignore')
    bs = BeautifulSoup(cont, "html.parser",fromEncoding="gb18030")
    for i in bs.select('.HorizontalFeedCard__title > span'):
        result.append({"title": i.text})
    return search_id, msToken, tt_scid

def main():
    count = 10
    result = []
    hasmore = True
    session = requests.session()
    search_id, msToken, tt_scid  = init(session, result)
    while hasmore:
        now = int(round(time.time() * 1000))
        x_box = getX_Bogus(now, msToken)
        signature = getsignature(now, tt_scid, f"www.ixigua.com/search/{search}/?wid_try=1", f"X-Bogus={x_box}&debug_model=false&msToken={msToken}&search_id={search_id}&wid_try=1&pathname=/api/searchv2/lvideo/{search}/{count}&tt_webid=&uuid=")
        response = session.get(f'https://www.ixigua.com/api/searchv2/complex/love/{count}?search_id={search_id}&wid_try=1&debug_model=false&msToken={msToken}&_signature={signature}', headers=headers, verify=False)
        res = response.json()
        hasmore = False
        time.sleep(1)
        print("2222222222222222222222222222222")
        if res["code"] == 0:
            if res["data"]["has_more"]:
                hasmore = True
                count = count + 10
                k = [i["data"] for i in res["data"]["data"]]
                result = result + k

    print(count)
    #print(result)
    print([i["title"]  for i in result])


if __name__ =="__main__":
    #search_id = "2022112115203301015115202605ED9AF5"
    #sessionss={'xiguavideopcwebid': '7168347219782485518', 'xiguavideopcwebid_sig': 'vm22Y_e6X9a2cmSzPi32W2usAWE', 'MONITOR_WEB_ID': '7168347219782485518', 'ixigua_a_s': '1', 'ttcid': 'bf8e47809c9b4367878669dc7affa5c233', 'tt_scid': 'YLy2BlJz-KN7wPD1gEFIzUBb9.n6ByCZBXxzZJrkvNK12AF2YWZ-rlqdh6kofCUkb0cd', 'ttwid': '1%7C42AfmF3Dl4NjwdqntTRl4ZscPy7Gg3Qc3rro5HXAAis%7C1669014456%7C298e6ce912094b0c798711442edb0c3af04c7115450353549a947a1e4206ddfa', 'msToken': 'FF-XMhZb8ZlSu4yLKDvbZPWHzaWl1uf0Bpqo_7PMRquV2aOOPH3JBwPnr-GLEUNhwIk-vKaTPOgwJau8SHbfR1uOqtPRiZdHRUJAyXdsLcGRd8xDM6-ax7aVr2o3dg==', 'support_avif': 'true', 'support_webp': 'true'}
    main()
        
        
                
    