import urllib.request
client_id = "gXIkyqzxDNkWFtMvRS66"
client_secret = "UKGPyAAoJ3"
encText = urllib.parse.quote("국립생태원 멸종위기종")
url = "https://openapi.naver.com/v1/search/news?query=" + encText # JSON 결과

request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)