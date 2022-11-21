function _0x2f2740(a, c, e, b, d, f, t, n, o, i, r, _, x, u, s, l, v, h, g) {
	let w = new Uint8Array(19);
	return w[0] = a, w[1] = r, w[2] = c, w[3] = _, w[4] = e, w[5] = x, w[6] = b, w[7] = u, w[8] = d, w[9] = s, w[10] = f, w[11] = l, w[12] = t, w[13] = v, w[14] = n, w[15] = h, w[16] = o, w[17] = g, w[18] = i, String.fromCharCode.apply(null, w);
}

function _0x46fa4c(a, c) {
	let e, b = [],
		d = 0,
		f = "";
	for (let a = 0; a < 256; a++) {
		b[a] = a;
	}
	for (let c = 0; c < 256; c++) {
		d = (d + b[c] + a.charCodeAt(c % a.length)) % 256, e = b[c], b[c] = b[d], b[d] = e;
	}
	let t = 0;
	d = 0;
	for (let a = 0; a < c.length; a++) {
		t = (t + 1) % 256, d = (d + b[t]) % 256, e = b[t], b[t] = b[d], b[d] = e, f += String.fromCharCode(c.charCodeAt(a) ^ b[(b[t] + b[d]) % 256]);
	}
	return f;
}

function _0x583250(a) {
	return String.fromCharCode(a);
}

function _0x2b6720(a, c, e) {
	return _0x583250(a) + _0x583250(c) + e;
}


_0x5960a2 = function(a) {
	for (var c = a.length >> 1, e = c << 1, b = new Uint8Array(c), d = 0, f = 0; f < e;) {
		b[d++] = _0x511f86[a.charCodeAt(f++)] << 4 | _0x511f86[a.charCodeAt(f++)];
	}
	return b;
} 

function _0x16a2f1() {
	_0x533382[0] = _0x533382[16] = _0x533382[1] = _0x533382[2] = _0x533382[3] = _0x533382[4] = _0x533382[5] = _0x533382[6] = _0x533382[7] = _0x533382[8] = _0x533382[9] = _0x533382[10] = _0x533382[11] = _0x533382[12] = _0x533382[13] = _0x533382[14] = _0x533382[15] = 0, 
	this.blocks = _0x533382, this.buffer8 = _0x583a1a;
	this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
	this.finalized = this.hashed = !1, this.first = !0;
}

_0x16a2f1.prototype.hash = function() {
	var b, d, e, a, c, f, t = this.blocks;
	this.first ? d = ((d = ((b = ((b = t[0] - 680876937) << 7 | b >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (a = ((a = (-1732584194 ^ 2004318071 & b) + t[1] - 117830708) << 12 | a >>> 20) + b << 0) & (-271733879 ^ b)) + t[2] - 1126478375) << 17 | e >>> 15) + a << 0) & (a ^ b)) + t[3] - 1316259209) << 22 | d >>> 10) + e << 0 : (b = this.h0, 
	d = this.h1, e = this.h2, d = ((d += ((b = ((b += ((a = this.h3) ^ d & (e ^ a)) + t[0] - 680876936) << 7 | b >>> 25) + d << 0) ^ (e = ((e += (d ^ (a = ((a += (e ^ b & (d ^ e)) + t[1] - 389564586) << 12 | a >>> 20) + b << 0) & (b ^ d)) + t[2] + 606105819) << 17 | e >>> 15) + a << 0) & (a ^ b)) + t[3] - 1044525330) << 22 | d >>> 10) + e << 0), 
	d = ((d += ((b = ((b += (a ^ d & (e ^ a)) + t[4] - 176418897) << 7 | b >>> 25) + d << 0) ^ (e = ((e += (d ^ (a = ((a += (e ^ b & (d ^ e)) + t[5] + 1200080426) << 12 | a >>> 20) + b << 0) & (b ^ d)) + t[6] - 1473231341) << 17 | e >>> 15) + a << 0) & (a ^ b)) + t[7] - 45705983) << 22 | d >>> 10) + e << 0, 
	d = ((d += ((b = ((b += (a ^ d & (e ^ a)) + t[8] + 1770035416) << 7 | b >>> 25) + d << 0) ^ (e = ((e += (d ^ (a = ((a += (e ^ b & (d ^ e)) + t[9] - 1958414417) << 12 | a >>> 20) + b << 0) & (b ^ d)) + t[10] - 42063) << 17 | e >>> 15) + a << 0) & (a ^ b)) + t[11] - 1990404162) << 22 | d >>> 10) + e << 0, 
	d = ((d += ((b = ((b += (a ^ d & (e ^ a)) + t[12] + 1804603682) << 7 | b >>> 25) + d << 0) ^ (e = ((e += (d ^ (a = ((a += (e ^ b & (d ^ e)) + t[13] - 40341101) << 12 | a >>> 20) + b << 0) & (b ^ d)) + t[14] - 1502002290) << 17 | e >>> 15) + a << 0) & (a ^ b)) + t[15] + 1236535329) << 22 | d >>> 10) + e << 0, 
	d = ((d += ((a = ((a += (d ^ e & ((b = ((b += (e ^ a & (d ^ e)) + t[1] - 165796510) << 5 | b >>> 27) + d << 0) ^ d)) + t[6] - 1069501632) << 9 | a >>> 23) + b << 0) ^ b & ((e = ((e += (b ^ d & (a ^ b)) + t[11] + 643717713) << 14 | e >>> 18) + a << 0) ^ a)) + t[0] - 373897302) << 20 | d >>> 12) + e << 0, 
	d = ((d += ((a = ((a += (d ^ e & ((b = ((b += (e ^ a & (d ^ e)) + t[5] - 701558691) << 5 | b >>> 27) + d << 0) ^ d)) + t[10] + 38016083) << 9 | a >>> 23) + b << 0) ^ b & ((e = ((e += (b ^ d & (a ^ b)) + t[15] - 660478335) << 14 | e >>> 18) + a << 0) ^ a)) + t[4] - 405537848) << 20 | d >>> 12) + e << 0, 
	d = ((d += ((a = ((a += (d ^ e & ((b = ((b += (e ^ a & (d ^ e)) + t[9] + 568446438) << 5 | b >>> 27) + d << 0) ^ d)) + t[14] - 1019803690) << 9 | a >>> 23) + b << 0) ^ b & ((e = ((e += (b ^ d & (a ^ b)) + t[3] - 187363961) << 14 | e >>> 18) + a << 0) ^ a)) + t[8] + 1163531501) << 20 | d >>> 12) + e << 0, 
	d = ((d += ((a = ((a += (d ^ e & ((b = ((b += (e ^ a & (d ^ e)) + t[13] - 1444681467) << 5 | b >>> 27) + d << 0) ^ d)) + t[2] - 51403784) << 9 | a >>> 23) + b << 0) ^ b & ((e = ((e += (b ^ d & (a ^ b)) + t[7] + 1735328473) << 14 | e >>> 18) + a << 0) ^ a)) + t[12] - 1926607734) << 20 | d >>> 12) + e << 0, 
	d = ((d += ((f = (a = ((a += ((c = d ^ e) ^ (b = ((b += (c ^ a) + t[5] - 378558) << 4 | b >>> 28) + d << 0)) + t[8] - 2022574463) << 11 | a >>> 21) + b << 0) ^ b) ^ (e = ((e += (f ^ d) + t[11] + 1839030562) << 16 | e >>> 16) + a << 0)) + t[14] - 35309556) << 23 | d >>> 9) + e << 0, 
	d = ((d += ((f = (a = ((a += ((c = d ^ e) ^ (b = ((b += (c ^ a) + t[1] - 1530992060) << 4 | b >>> 28) + d << 0)) + t[4] + 1272893353) << 11 | a >>> 21) + b << 0) ^ b) ^ (e = ((e += (f ^ d) + t[7] - 155497632) << 16 | e >>> 16) + a << 0)) + t[10] - 1094730640) << 23 | d >>> 9) + e << 0, 
	d = ((d += ((f = (a = ((a += ((c = d ^ e) ^ (b = ((b += (c ^ a) + t[13] + 681279174) << 4 | b >>> 28) + d << 0)) + t[0] - 358537222) << 11 | a >>> 21) + b << 0) ^ b) ^ (e = ((e += (f ^ d) + t[3] - 722521979) << 16 | e >>> 16) + a << 0)) + t[6] + 76029189) << 23 | d >>> 9) + e << 0, 
	d = ((d += ((f = (a = ((a += ((c = d ^ e) ^ (b = ((b += (c ^ a) + t[9] - 640364487) << 4 | b >>> 28) + d << 0)) + t[12] - 421815835) << 11 | a >>> 21) + b << 0) ^ b) ^ (e = ((e += (f ^ d) + t[15] + 530742520) << 16 | e >>> 16) + a << 0)) + t[2] - 995338651) << 23 | d >>> 9) + e << 0, 
	d = ((d += ((a = ((a += (d ^ ((b = ((b += (e ^ (d | ~a)) + t[0] - 198630844) << 6 | b >>> 26) + d << 0) | ~e)) + t[7] + 1126891415) << 10 | a >>> 22) + b << 0) ^ ((e = ((e += (b ^ (a | ~d)) + t[14] - 1416354905) << 15 | e >>> 17) + a << 0) | ~b)) + t[5] - 57434055) << 21 | d >>> 11) + e << 0, 
	d = ((d += ((a = ((a += (d ^ ((b = ((b += (e ^ (d | ~a)) + t[12] + 1700485571) << 6 | b >>> 26) + d << 0) | ~e)) + t[3] - 1894986606) << 10 | a >>> 22) + b << 0) ^ ((e = ((e += (b ^ (a | ~d)) + t[10] - 1051523) << 15 | e >>> 17) + a << 0) | ~b)) + t[1] - 2054922799) << 21 | d >>> 11) + e << 0, 
	d = ((d += ((a = ((a += (d ^ ((b = ((b += (e ^ (d | ~a)) + t[8] + 1873313359) << 6 | b >>> 26) + d << 0) | ~e)) + t[15] - 30611744) << 10 | a >>> 22) + b << 0) ^ ((e = ((e += (b ^ (a | ~d)) + t[6] - 1560198380) << 15 | e >>> 17) + a << 0) | ~b)) + t[13] + 1309151649) << 21 | d >>> 11) + e << 0, 
	d = ((d += ((a = ((a += (d ^ ((b = ((b += (e ^ (d | ~a)) + t[4] - 145523070) << 6 | b >>> 26) + d << 0) | ~e)) + t[11] - 1120210379) << 10 | a >>> 22) + b << 0) ^ ((e = ((e += (b ^ (a | ~d)) + t[2] + 718787259) << 15 | e >>> 17) + a << 0) | ~b)) + t[9] - 343485551) << 21 | d >>> 11) + e << 0, 
	this.first ? (this.h0 = b + 1732584193 << 0, this.h1 = d - 271733879 << 0, this.h2 = e - 1732584194 << 0, 
	this.h3 = a + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + b << 0, this.h1 = this.h1 + d << 0, 
	this.h2 = this.h2 + e << 0, this.h3 = this.h3 + a << 0);
}

_0x16a2f1.prototype.update = function(b) {
	if (!this.finalized) {
		var d, e = typeof b;
		if ("string" !== e) {
			if ("object" !== e) {
				throw _0x390cba;
			}
			if (null === b) {
				throw _0x390cba;
			}
			if (_0x159b35 && b.constructor === ArrayBuffer) {
				b = new Uint8Array(b);
			} else if (!(Array.isArray(b) || _0x159b35 && ArrayBuffer.isView(b))) {
				throw _0x390cba;
			}
			d = !0;
		}
		for (var a, c, f = 0, t = b.length, n = this.blocks, o = this.buffer8; f < t; ) {
			if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), 
			d) {
				if (_0x159b35) {
					for (c = this.start; f < t && c < 64; ++f) {
						o[c++] = b[f];
					}
				} else {
					for (c = this.start; f < t && c < 64; ++f) {
						n[c >> 2] |= b[f] << _0x5ba736[3 & c++];
					}
				}
			} else if (_0x159b35) {
				for (c = this.start; f < t && c < 64; ++f) {
					(a = b.charCodeAt(f)) < 128 ? o[c++] = a : a < 2048 ? (o[c++] = 192 | a >> 6, o[c++] = 128 | 63 & a) : a < 55296 || a >= 57344 ? (o[c++] = 224 | a >> 12, 
					o[c++] = 128 | a >> 6 & 63, o[c++] = 128 | 63 & a) : (a = 65536 + ((1023 & a) << 10 | 1023 & b.charCodeAt(++f)), 
					o[c++] = 240 | a >> 18, o[c++] = 128 | a >> 12 & 63, o[c++] = 128 | a >> 6 & 63, 
					o[c++] = 128 | 63 & a);
				}
			} else {
				for (c = this.start; f < t && c < 64; ++f) {
					(a = b.charCodeAt(f)) < 128 ? n[c >> 2] |= a << _0x5ba736[3 & c++] : a < 2048 ? (n[c >> 2] |= (192 | a >> 6) << _0x5ba736[3 & c++], 
					n[c >> 2] |= (128 | 63 & a) << _0x5ba736[3 & c++]) : a < 55296 || a >= 57344 ? (n[c >> 2] |= (224 | a >> 12) << _0x5ba736[3 & c++], 
					n[c >> 2] |= (128 | a >> 6 & 63) << _0x5ba736[3 & c++], n[c >> 2] |= (128 | 63 & a) << _0x5ba736[3 & c++]) : (a = 65536 + ((1023 & a) << 10 | 1023 & b.charCodeAt(++f)), 
					n[c >> 2] |= (240 | a >> 18) << _0x5ba736[3 & c++], n[c >> 2] |= (128 | a >> 12 & 63) << _0x5ba736[3 & c++], 
					n[c >> 2] |= (128 | a >> 6 & 63) << _0x5ba736[3 & c++], n[c >> 2] |= (128 | 63 & a) << _0x5ba736[3 & c++]);
				}
			}
			this.lastByteIndex = c, this.bytes += c - this.start, c >= 64 ? (this.start = c - 64, 
			this.hash(), this.hashed = !0) : this.start = c;
		}
		return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
		this.bytes = this.bytes % 4294967296), this;
	}
}

_0x16a2f1.prototype.finalize = function() {
	if (!this.finalized) {
	    var _0xe50cd6 = [ 128, 32768, 8388608, -2147483648 ];
		this.finalized = !0;
		var b = this.blocks, d = this.lastByteIndex;
		b[d >> 2] |= _0xe50cd6[3 & d], d >= 56 && (this.hashed || this.hash(), b[0] = b[16], 
		b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0), 
		b[14] = this.bytes << 3, b[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
	}
}

_0x16a2f1.prototype.hex = function() {
                this.finalize();
                var b = this.h0, d = this.h1, e = this.h2, a = this.h3;
                return _0x2f214e[b >> 4 & 15] + _0x2f214e[15 & b] + _0x2f214e[b >> 12 & 15] + _0x2f214e[b >> 8 & 15] + _0x2f214e[b >> 20 & 15] + _0x2f214e[b >> 16 & 15] + _0x2f214e[b >> 28 & 15] + _0x2f214e[b >> 24 & 15] + _0x2f214e[d >> 4 & 15] + _0x2f214e[15 & d] + _0x2f214e[d >> 12 & 15] + _0x2f214e[d >> 8 & 15] + _0x2f214e[d >> 20 & 15] + _0x2f214e[d >> 16 & 15] + _0x2f214e[d >> 28 & 15] + _0x2f214e[d >> 24 & 15] + _0x2f214e[e >> 4 & 15] + _0x2f214e[15 & e] + _0x2f214e[e >> 12 & 15] + _0x2f214e[e >> 8 & 15] + _0x2f214e[e >> 20 & 15] + _0x2f214e[e >> 16 & 15] + _0x2f214e[e >> 28 & 15] + _0x2f214e[e >> 24 & 15] + _0x2f214e[a >> 4 & 15] + _0x2f214e[15 & a] + _0x2f214e[a >> 12 & 15] + _0x2f214e[a >> 8 & 15] + _0x2f214e[a >> 20 & 15] + _0x2f214e[a >> 16 & 15] + _0x2f214e[a >> 28 & 15] + _0x2f214e[a >> 24 & 15];
            }
function getXBogus(originalString, strlens, short_str) {
    // 生成乱码字符串
	// var garbledString = getGarbledString(originalString);
	var garbledString = originalString;
	var XBogus = "";
	// var short_str = "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="
	// var short_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
	// 依次生成七组字符串
	//for (var i = 0; i <= 20; i += 3) {
	for (var i = 0; i <= strlens; i += 3) {
		var charCodeAtNum0 = garbledString.charCodeAt(i);
		//console.log("charCodeAtNum0",charCodeAtNum0)
		var charCodeAtNum1 = garbledString.charCodeAt(i + 1);
		var charCodeAtNum2 = garbledString.charCodeAt(i + 2);
		var baseNum = charCodeAtNum2 | charCodeAtNum1 << 8 | charCodeAtNum0 << 16;
		// 依次生成四个字符
		//console.log("baseNum",baseNum)
		//console.log("baseNumfaile",(baseNum & 16515072) >> 18)
		var str1 = short_str[(baseNum & 16515072) >> 18];
		var str2 = short_str[(baseNum & 258048) >> 12];
		var str3 = short_str[(baseNum & 4032) >> 6];
		var str4 = short_str[baseNum & 63];
		XBogus += str1 + str2 + str3 + str4;
	}
	return XBogus;
}


function _0x2aa1a6(b, d) {
	let e, a = [], c = 0, f = "";
	for (let b = 0; b < 256; b++) {
		a[b] = b;
	}
	for (let d = 0; d < 256; d++) {
		c = (c + a[d] + b.charCodeAt(d % b.length)) % 256, e = a[d], a[d] = a[c], a[c] = e;
	}
	let t = 0;
	c = 0;
	for (let b = 0; b < d.length; b++) {
		t = (t + 1) % 256, c = (c + a[t]) % 256, e = a[t], a[t] = a[c], a[c] = e, f += String.fromCharCode(d.charCodeAt(b) ^ a[(a[t] + a[c]) % 256]);
	}
	return f;
}



_0x3c0699 = function(b) {
        for (var d = b.length >> 1, e = d << 1, a = new Uint8Array(d), c = 0, f = 0; f < e; ) {
            a[c++] = _0x5a8c44[b.charCodeAt(f++)] << 4 | _0x5a8c44[b.charCodeAt(f++)];
        }
        return a;
}


var _0x390cba = "input is invalid type"
function _0x5a219d(b, d, e, a, c, f, t, n, o, i, r, _, x, u, s, l, v, h, g) {
	let w = new Uint8Array(19);
	return w[0] = b, w[1] = r, w[2] = d, w[3] = _, w[4] = e, w[5] = x, w[6] = a, w[7] = u, 
	w[8] = c, w[9] = s, w[10] = f, w[11] = l, w[12] = t, w[13] = v, w[14] = n, w[15] = h, 
	w[16] = o, w[17] = g, w[18] = i, String.fromCharCode.apply(null, w);
}



function _0x2aa1a6(b, d) {
        let e, a = [], c = 0, f = "";
        for (let b = 0; b < 256; b++) {
            a[b] = b;
        }
        for (let d = 0; d < 256; d++) {
            c = (c + a[d] + b.charCodeAt(d % b.length)) % 256, e = a[d], a[d] = a[c], a[c] = e;
        }
        let t = 0;
        c = 0;
        for (let b = 0; b < d.length; b++) {
            t = (t + 1) % 256, c = (c + a[t]) % 256, e = a[t], a[t] = a[c], a[c] = e, f += String.fromCharCode(d.charCodeAt(b) ^ a[(a[t] + a[c]) % 256]);
        }
        return f;
}

function _0x1aa733(b) {
	return String.fromCharCode(b);
}
	
function _0x2650e2(b, d, e) {
        return _0x1aa733(b) + _0x1aa733(d) + e;
}



var _0x511f86 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    10,
    11,
    12,
    13,
    14,
    15
]

b = "\u0000\u0000\u000e"
d = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
var hua = '';
var XBogus = '';
var _0x12f2a2 = new ArrayBuffer(68);
var isfirst = false
_0x583a1a = new Uint8Array(_0x12f2a2), _0x533382 = new Uint32Array(_0x12f2a2);
var _0x159b35 = true;_0x2f214e = "0123456789abcdef".split("");_0x5a8c44 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    10,
    11,
    12,
    13,
    14,
    15
]

    
function main(now, originalString){
    
    if(!isfirst){
        b = '\u0000\u0001\u000e'
    }
    var inithua = _0x2aa1a6(b, d)
    // originalString: URL 后面的原始参数
    // var originalString = "debug_model=false&msToken=xkn2P7qCAINW1Sloo95BYHe6--I6aEqxSM0aZjR0rBIlEg3d3M0vT4-J6zdr0lWXc4e0mhzTx1h-Smu5YdnHfOxJlZ9bZHP60wX6wrK_A88qDOvF6Px_"
    var uint8Array = _0x5960a2(new _0x16a2f1().update(_0x5960a2(new _0x16a2f1().update(originalString)['hex']()))['hex']());
    //console.log("uint8Array5555555555555555555555555555555555555555", uint8Array)

    fixedString1 = now/1000
    fixedString2 = 536919696

    var orgstr = getXBogus(inithua, 106, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
    orgstr = orgstr.substring(0,orgstr.length-2) + "=="
    //console.log("orgstr5555555555555555555555555555555555555555", orgstr)

    var tps = new _0x16a2f1().update(orgstr)['hex']()

    var vpt = _0x3c0699(tps)

    if(isfirst){
        array1 = [64,0,0,14,uint8Array[14],uint8Array[15],69,63,vpt[14],vpt[15],fixedString1 >> 24 & 255,fixedString1 >> 16 & 255, fixedString1 >> 8 & 255,fixedString1 >> 0 & 255,fixedString2 >> 24 & 255,fixedString2 >> 16 & 255, fixedString2 >> 8 & 255, fixedString2 >> 0 & 255] 
    }else {
        array1 = [64,0.00390625,1,14,uint8Array[14],uint8Array[15],69,63,vpt[14],vpt[15],fixedString1 >> 24 & 255,fixedString1 >> 16 & 255, fixedString1 >> 8 & 255,fixedString1 >> 0 & 255,fixedString2 >> 24 & 255,fixedString2 >> 16 & 255, fixedString2 >> 8 & 255, fixedString2 >> 0 & 255] 
    }

    array1.push(array1.reduce(function(a, b) { return a ^ b; }))

    array2 = [array1[0], array1[2], array1[4], array1[6], array1[8], array1[10], array1[12], array1[14], array1[16], array1[18], array1[1], array1[3], array1[5], array1[7], array1[9], array1[11], array1[13], array1[15], array1[17]]

    //console.log("array25555555555555555555555555555555555555555", array2)

    var tmp = _0x5a219d.apply(null, array2)

    var tmp2 = _0x2aa1a6('ÿ', tmp)

    var new2hua  = _0x2650e2(2, 255, tmp2)

    //console.log("result5555555555555555555555555555555555555555", hua)

    var needorgstr = getXBogus(new2hua, 20, "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=")

    //console.log("needorgstr", needorgstr)
    return needorgstr
}

function _0x28420a(b, d) {
    for (let e = 0; e < d.length; e++) {
        b = 65599 * (b ^ d.charCodeAt(e)) >>> 0;
    }
    return b;
}

function _0x39f8b9(b, d) {
    d || (d = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    let e = "";
    for (let a = b; a > 0; --a) {
        e += d[Math.floor(Math.random() * d.length)];
    }
    return e;
}

function shif(data) {
    let v = 0;
    if(data<26){
        v = 65;
    } else if(data<52){
        v = 71;
    } else if(data<62){
        v = -4;
    } 
    return data + v
}

function gennercode(data){
    let n1,n2,n3,n4,n5;
    n1 = shif(data >> 24&63);
    n2 = shif(data >> 18&63);
    n3 = shif(data >> 12&63);
    n4 = shif(data >> 6&63);
    n5 = shif(data &63);
    console.log(data, n1, n2, n3,n4,n5)
    return String.fromCharCode(n1) + String.fromCharCode(n2) + String.fromCharCode(n3) + String.fromCharCode(n4) + String.fromCharCode(n5)
}

function _0x3998e8(b) {
    if (/^[\x00-\x7f]*$/.test(b)) {
        return b;
    }
    for (var d = [], e = b.length, a = 0, c = 0; a < e; ++a, ++c) {
        var f = b.charCodeAt(a);
        if (f < 128) {
            d[c] = b.charAt(a);
        } else if (f < 2048) {
            d[c] = String.fromCharCode(192 | f >> 6, 128 | 63 & f);
        } else {
            if (!(f < 55296 || f > 57343)) {
                if (a + 1 < e) {
                    var t = b.charCodeAt(a + 1);
                    if (f < 56320 && 56320 <= t && t <= 57343) {
                        var n = 65536 + ((1023 & f) << 10 | 1023 & t);
                        d[c] = String.fromCharCode(240 | n >> 18 & 63, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n), 
                        ++a;
                        continue;
                    }
                }
                throw new Error("Malformed string");
            }
            d[c] = String.fromCharCode(224 | f >> 12, 128 | f >> 6 & 63, 128 | 63 & f);
        }
    }
    return d.join("");
}

function _0x2245db(b, d) {
    return null == b || 0 === b.length ? b : (b = _0x3998e8(b), d = _0x3998e8(d), _0x442f48(_0x15155f(_0x372594(b, !0), _0x3a12c5(_0x372594(d, !1))), !1));
}

function _0x372594(b, d) {
    var e, a = b.length, c = a >> 2;
    0 != (3 & a) && ++c, d ? (e = new Array(c + 1))[c] = a : e = new Array(c);
    for (let d = 0; d < a; ++d) {
        e[d >> 2] |= b.charCodeAt(d) << ((3 & d) << 3);
    }
    return e;
}

function _0x442f48(b, d) {
    var e = b.length, a = e << 2;
    if (d) {
        var c = b[e - 1];
        if (c < (a -= 4) - 3 || c > a) {
            return null;
        }
        a = c;
    }
    for (var f = 0; f < e; f++) {
        b[f] = String.fromCharCode(255 & b[f], b[f] >>> 8 & 255, b[f] >>> 16 & 255, b[f] >>> 24 & 255);
    }
    var t = b.join("");
    return d ? t.substring(0, a) : t;
}

function _0x15155f(b, d) {
    var e, a, c, f, t, n, o = b.length, i = o - 1;
    for (a = b[i], c = 0, n = 0 | Math.floor(6 + 52 / o); n > 0; --n) {
        for (f = (c = _0x41bdc0(c + _0x4a934c)) >>> 2 & 3, t = 0; t < i; ++t) {
            e = b[t + 1], a = b[t] = _0x41bdc0(b[t] + _0x36c4b4(c, e, a, t, f, d));
        }
        e = b[0], a = b[i] = _0x41bdc0(b[i] + _0x36c4b4(c, e, a, i, f, d));
    }
    return b;
}

function _0x3a12c5(b) {
    return b.length < 4 && (b.length = 4), b;
}

function _0x443ed9(b, d, e) {
    let a = "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe", c = "=";
    e && (c = ""), d && (a = d);
    let f, t = "", n = 0;
    for (;b.length >= n + 3; ) {
        f = (255 & b.charCodeAt(n++)) << 16 | (255 & b.charCodeAt(n++)) << 8 | 255 & b.charCodeAt(n++), 
        t += a.charAt((16515072 & f) >> 18), t += a.charAt((258048 & f) >> 12), t += a.charAt((4032 & f) >> 6), 
        t += a.charAt(63 & f);
    }
    return b.length - n > 0 && (f = (255 & b.charCodeAt(n++)) << 16 | (b.length > n ? (255 & b.charCodeAt(n)) << 8 : 0), 
    t += a.charAt((16515072 & f) >> 18), t += a.charAt((258048 & f) >> 12), t += b.length > n ? a.charAt((4032 & f) >> 6) : c, 
    t += c), t;
}

function _0x41bdc0(b) {
    return 4294967295 & b;
}

function _0x36c4b4(b, d, e, a, c, f) {
    return (e >>> 5 ^ d << 2) + (d >>> 3 ^ e << 4) ^ (b ^ d) + (f[3 & a ^ c] ^ e);
}

var _0x4a934c = 2654435769;

function getsignature(now, tt_scid, searchurl, paramsurl){
    var datashu,x1,x2,basenumber;begin="_02B4Z6wo00001"
    var datashu = now //1668730751080; //Date.now();
    //var tt_scid = "KVDwkzV2loTzC.X8ceKDn-ppJeFrPt.bGeVX2CoOj7.z6TmuFpK8.qRLX1ZRJPMZ7291";
    datashu = Math.trunc(datashu/1000)
    x1 = _0x28420a(0, datashu.toString())
    //x2 = datashu ^(_0x28420a(x1,"www.ixigua.com/search/love/?logTag=423ac644324e5c15d0b4&tab_name=home")%65521*65521)
    x2 = datashu ^(_0x28420a(x1,searchurl)%65521*65521)
    x2 = x2 >>> 0

    fill = ""
    for (let i=32 - x2.toString(2).length;i>0;i--){
        fill = fill + "0"
    }
    basenumber = parseInt('10000000110000' + fill + x2.toString(2), 2)
    
    g1 = gennercode(basenumber>>2)

    g2 = gennercode(basenumber<<28^515)

    g3 = gennercode((Math.trunc(basenumber/4294967296) << 26) + ((536919696 ^basenumber)>>>6))
    
    m = 536919696^basenumber
    
    t1 = _0x28420a(0, basenumber.toString())
    num1 = _0x28420a(t1,"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36")%65521<<16
    // num2 =  _0x28420a(t1,"X-Bogus=DFSzswSOkcXANtLeS8KBhF9WX7JS&debug_model=false&msToken=xkn2P7qCAINW1Sloo95BYHe6--I6aEqxSM0aZjR0rBIlEg3d3M0vT4-J6zdr0lWXc4e0mhzTx1h-Smu5YdnHfOxJlZ9bZHP60wX6wrK_A88qDOvF6Px_&pathname=/api/searchv2/lvideo/love/0&tt_webid=&uuid=")%65521
    num2 =  _0x28420a(t1,paramsurl)%65521
    t2 = num1 + num2
    g4 = gennercode(t2>>2)
    g5 = gennercode((t2 << 28) + ((288^basenumber)>>>4))

    g6 = gennercode(_0x28420a(x1, searchurl)%65521)

    g7 = _0x39f8b9(4, null)
    
    g8 = _0x443ed9(_0x2245db(tt_scid, g7), "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.", null)

    return begin + g1 + g2 + g3 + String.fromCharCode(shif(m&63)) + g4 + g5 + g6 + g7 + g8


}


