import os
import unittest
from api import app

class RoutesTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
    def tearDown(self):
        pass

    def test_get_domains_route_exist(self):
        route = self.app.get('/domains')
        self.assertNotEqual("404 NOT FOUND", route.status)
    def test_put_domain_route_exist(self):
        route = self.app.put('/domain/a')
        self.assertNotEqual("404 NOT FOUND", route.status)
    def test_put_domain_route_returns_given_parameter(self):
        route = self.app.put('/domain/abc')
        self.assertTrue('abc' in route.data)

if __name__ == '__main__':
    unittest.main()
